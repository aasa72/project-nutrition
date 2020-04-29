import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui'
import { BarcodeButton } from '../components/BarcodeButton'

const initialState = {
  list: {
    name: 'scannedGoods',
    items: [{ //The scanner doesn´t work so we hardcoded some info from the API
      code: '7622300744663', 
      product_name: 'Original Oreo',
      manufacturing_places: ''
      },
      {code: '3465511101153',
      product_name: 'Graines à germer alfalfa',
      manufacturing_places: 'Sancoins,France'
     },
    {code: '7310865071804',
      product_name: "Ekologisk Mellanmjölk",
      manufacturing_places: "Sweden"
    },
    {code:'5449000133335',
    product_name: 'Coca-Cola Zero',
    manufacturing_places: 'Belgique,Sweden'
    },
  {code: '87158021',
  product_name: 'Salt med Jod',
  manufacturing_places: ''
}
]
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