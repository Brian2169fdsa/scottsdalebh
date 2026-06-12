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

  const { type, name, email, phone } = body || {};
  if (!type || !name) return res.status(400).json({ error: 'type and name are required' });

  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/Phoenix' });
  console.log(`[SBHG CONTACT] ${type} | ${name} | ${email || phone} | ${timestamp}`);

  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL;

  if (resendKey && toEmail) {
    const isEmail = type === 'email';
    const subject = isEmail
      ? `Email request from ${name} - SBHG Chat`
      : `Callback request from ${name} - SBHG Chat`;

    const html = `
      <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:24px;background:#f9f9f9;border-radius:8px;">
        <h2 style="color:#0E1B33;margin-top:0;">New ${isEmail ? 'Email' : 'Callback'} Request</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#555;width:120px;">Name</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>
          ${isEmail ? `<tr><td style="padding:8px 0;color:#555;">Email</td><td style="padding:8px 0;font-weight:600;">${email}</td></tr>` : ''}
          ${!isEmail ? `<tr><td style="padding:8px 0;color:#555;">Phone</td><td style="padding:8px 0;font-weight:600;">${phone}</td></tr>` : ''}
          <tr><td style="padding:8px 0;color:#555;">Time</td><td style="padding:8px 0;">${timestamp} (AZ)</td></tr>
          <tr><td style="padding:8px 0;color:#555;">Source</td><td style="padding:8px 0;">Website Chat Widget</td></tr>
        </table>
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
