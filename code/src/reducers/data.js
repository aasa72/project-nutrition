import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: {
    name: 'scannedGoods',
    items: [7622300744663,
      3465511101153, 
      7310865071804 ]
  }
};

export const data = createSlice({
  name:"data",
  initialState: initialState,
  reducers: {
    setData: (state, action) => {
      state.items = action.payload;
    }
    
  }
});
