import { configureStore } from '@reduxjs/toolkit';
import colorReducer from '../features/colorsSlice';

export default configureStore({
  reducer: {
    colors: colorReducer,
  },
});
