// 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

const OpenAI = require('openai');
require('dotenv').config();

const API_KEY = process.env.API_KEY;
const openai = new OpenAI({ key: API_KEY });

async function main() {
  try {
    const completion = await openai.chat.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' }
      ],
    });

    console.log(completion.data.choices[0].message.content);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();

