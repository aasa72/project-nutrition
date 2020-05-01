import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui'

const initialState = {
  item: [] 
  }

export const data = createSlice({
  name:"data",
  initialState: initialState,
  reducers: {
    setData: (state, action) => {
      state.item = action.payload
    }, 
    return: () => {
      return initialState
    }
  }
})

export const fetchData = (code) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
   
     fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
       .then((data) => data.json())
       .then((json) => {
          dispatch(data.actions.setData(json))

       dispatch(ui.actions.setLoading(false))
     })
  }
}