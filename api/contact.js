// Requires env vars in Vercel:
//   CONTACT_EMAIL  - team inbox (e.g. admissions@scottsdalebh.com)
//   RESEND_API_KEY - from resend.com (free tier works)

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { return res.status(400).json({ error: 'Invalid JSON' }); }
  }

  const { type, name, email, phone, insurer, memberId } = body || {};
  if (!type || !name) return res.status(400).json({ error: 'type and name are required' });

  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/Phoenix' });
  console.log(`[SBHG CONTACT] ${type} | ${name} | ${email || phone || insurer} | ${timestamp}`);

  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL;

  if (resendKey && toEmail) {
    const titles = { email: 'Email Request', callback: 'Callback Request', insurance: 'Insurance Verification Request' };
    const subject = `${titles[type] || 'Contact Request'} from ${name} - SBHG Chat`;

    const rows = [
      `<tr><td style="padding:8px 0;color:#555;width:140px;">Name</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>`,
      email ? `<tr><td style="padding:8px 0;color:#555;">Email</td><td style="padding:8px 0;font-weight:600;">${email}</td></tr>` : '',
      phone ? `<tr><td style="padding:8px 0;color:#555;">Phone</td><td style="padding:8px 0;font-weight:600;">${phone}</td></tr>` : '',
      insurer ? `<tr><td style="padding:8px 0;color:#555;">Insurance</td><td style="padding:8px 0;font-weight:600;">${insurer}</td></tr>` : '',
      memberId ? `<tr><td style="padding:8px 0;color:#555;">Member ID</td><td style="padding:8px 0;font-weight:600;">${memberId}</td></tr>` : '',
      `<tr><td style="padding:8px 0;color:#555;">Time</td><td style="padding:8px 0;">${timestamp} (AZ)</td></tr>`,
      `<tr><td style="padding:8px 0;color:#555;">Source</td><td style="padding:8px 0;">Website Chat Widget</td></tr>`,
    ].filter(Boolean).join('');

    const html = `
      <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:24px;background:#f9f9f9;border-radius:8px;">
        <h2 style="color:#0E1B33;margin-top:0;">${titles[type] || 'Contact Request'}</h2>
        <table style="width:100%;border-collapse:collapse;">${rows}</table>
        <p style="margin-top:20px;color:#888;font-size:13px;">This request came through the SBHG website chat assistant.</p>
      </div>`;

    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'SBHG Chat <noreply@scottsdalebh.com>',
          to: toEmail,
          subject,
          html,
        }),
      });
    } catch (err) {
      console.error('Resend error:', err.message);
    }
  }

  return res.status(200).json({ ok: true });
}
