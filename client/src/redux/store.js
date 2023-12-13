import { configureStore } from '@reduxjs/toolkit';
import aiReducer from './openai/aiSlice';

const store = configureStore({
  reducer: {
    openai: aiReducer,
  },
});

export default store;