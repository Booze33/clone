const axios = require('axios');
require('dotenv').config();

const OPENAI_API_KEY = process.env.API_KEY;

const apiUrl = 'https://api.openai.com/v1/chat/completions';

const requestData = {
  model: 'gpt-3.5-turbo',
  messages: [{ role: 'user', content: 'Say this is a test!' }],
  temperature: 0.7
};

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${OPENAI_API_KEY}`
};

async function makeApiRequest() {
  try {
    const response = await axios.post(apiUrl, requestData, { headers });
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

makeApiRequest();
