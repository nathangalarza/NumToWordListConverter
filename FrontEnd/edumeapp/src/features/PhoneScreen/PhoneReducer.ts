import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import conversionService from '../../services/conversion.service';

;

export interface PhoneState {
  value: string;
  status: 'idle' | 'loading' | 'failed';
  suggestions: string[];
}

const initialState: PhoneState = {
  value: '',
  status: 'idle',
  suggestions: []
};

export const phoneSlice = createSlice({
  name: 'phone',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addInput: (state, key) => {
      state.value += key.payload;
    },
    removeInput: (state) => {
      if (state.value.length !== 0) {
        state.value = state.value.slice(0, -1);
      }
    },

    // Use the PayloadAction type to declare the contents of `action.payload`

  },
  extraReducers: (builder) => {
    builder
      .addCase(getCombinationsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCombinationsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.suggestions.push(action.payload);
      });

  },

});

export const { addInput, removeInput } = phoneSlice.actions;
export const selectNumber = (state: RootState) => state.phone.value;
export const selectSuggestions = (state: RootState) => state.phone.suggestions;
export default phoneSlice.reducer;

export const getCombinationsAsync = createAsyncThunk(
  'number/fetchLetters',
  async (numString: string) => {
    const response = await conversionService.get(numString).then(
      (response: any) => {
        return response.data
      }
    );
    return response;
  }
);



