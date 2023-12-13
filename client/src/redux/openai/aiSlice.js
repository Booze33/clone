import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = "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"; // You should not share your API key publicly

const apiURL = 'https://api.openai.com/v1/completions';

export const sendMsg = createAsyncThunk('openai/sendMsg', async (message) => {
  try {
    const response = await axios.post(
      `${apiURL}`,
      {
        model: 'gpt-3.5-turbo-instruct',
        prompt: message,
        max_tokens: 256,
        temperature: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    throw error;
  }
});

const aiSlice = createSlice({
    name: 'openai',
  initialState: {
    status: null,
    data: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMsg.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(sendMsg.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(sendMsg.rejected, (state, action) => {
        state.status = 'failed';
        state.data = action.error.message;
      });
  },
});

export const selectStatus = (state) => state.openai.status;
export const selectData = (state) => state.openai.data;

export default aiSlice.reducer;