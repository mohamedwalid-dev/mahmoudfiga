const OpenAI = require('openai');

exports.handler = async function (event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  try {
    const { message } = JSON.parse(event.body || '{}');
    if (!message) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing message' }) };
    }

    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const response = await client.responses.create({
      model: 'gpt-5.5',
      input: message,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ reply: response.output_text }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server Error' }),
    };
  }
};
