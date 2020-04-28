import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui'
import { BarcodeButton } from '../components/BarcodeButton'

const initialState = {
  list: {
    name: 'scannedGoods',
    items: [{ 
      namn: '7622300744663', 
      color: 'red'},//vi hårdkodar code,namn och ursprungsland från json, kanske 5 varor av olika ursprung?
      3465511101153, 
      7310865071804 ]
  }
};

export const data = createSlice({
  name:"data",
  initialState: initialState,
  reducers: {
    setData: (state, action) => {
      state.items = action.payload
    }
  }
});

export const fetchData = ({}) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
     const onDetected = (code) => {
       console.log(`Code: ${code}`);

     fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
       .then((data) => data.json())
       .then((json) => {
          dispatch(data.actions.setData(json))

       dispatch(ui.actions.setLoading(false))
     });
 };
 }}