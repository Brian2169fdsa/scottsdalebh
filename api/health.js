import Anthropic from '@anthropic-ai/sdk';

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');

  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return res.status(200).json({
      status: 'FAIL',
      problem: 'ANTHROPIC_API_KEY is not set in Vercel environment variables',
      fix: 'Go to Vercel dashboard → your project → Settings → Environment Variables → add ANTHROPIC_API_KEY with your sk-ant-... key. Then redeploy.',
    });
  }

  try {
    const client = new Anthropic({ apiKey });
    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 20,
      messages: [{ role: 'user', content: 'Reply with the word OK only.' }],
    });
    return res.status(200).json({
      status: 'OK',
      message: 'Chat is connected and working',
      claude_replied: response.content[0].text,
    });
  } catch (err) {
    return res.status(200).json({
      status: 'FAIL',
      problem: err.message,
      error_status: err.status,
      fix: err.status === 401
        ? 'API key is invalid. Double-check the value in Vercel → Settings → Environment Variables.'
        : err.status === 404
        ? 'Model ID not found. Check api/chat.js model name.'
        : 'Unknown error - see problem field above.',
    });
  }
}
