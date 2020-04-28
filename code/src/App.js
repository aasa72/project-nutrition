import React from "react";
import { Provider, useDispatch, useSelector } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { data } from './reducers/data';
import { ui } from './reducers/ui';
import { BarcodeButton } from './components/BarcodeButton';
import { BarcodeScanner } from './components/BarcodeScanner';
import { ScannedInfo } from './components/ScannedInfo'


const reducer = combineReducers ({
  data: data.reducer,
  ui: ui.reducer
});

const store = configureStore({reducer});


const onDetected = (code) => {
  console.log(`Code: ${code}`);
  
/* export const fetchData = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.reducer.items)

 return (dispatch) => {
   //setLoading true här
    const onDetected = (code) => {
      console.log(`Code: ${code}`);
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
      .then((data) => data.json())
      .then((json) =>  dispatch(data.actions.setData(json.results)))
      //console.log(json); 
     
      //setLoading false här
    }, [dispatch];
};*/
}

export const App = () => {
  
  //const dispatch = useDispatch();
  //const scannedData = useSelector((store) => store.reducer.items);
//const test = useSelector((state) => state.data.list.items)
    return (
    <Provider store={store}>
    <div>
      <BarcodeButton />
      <label>
        {" "}
        Test codes here:{" "}
        <input type="text" onChange={(e) => onDetected(e.target.value)}></input>
      </label>
      <p>
        {" "}
        Use the field above to test barcodes manually and keep an eye on your
        console in the browser. i.e. Type 7311070347272 - Pågen Gifflar. Yum
      </p>
      <ScannedInfo />
      
    </div>
    </Provider>
  )
  }