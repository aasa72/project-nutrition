import React from "react";
import { Provider, useDispatch } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { data } from './reducers/data';
import { ui } from './reducers/ui';
import { BarcodeButton } from './components/BarcodeButton';
import { BarcodeScanner } from "components/BarcodeScanner";

const reducer = combineReducers ({
  data: data.reducer,
  ui: ui.reducer
});

export const store = configureStore({reducer});
const dispatch = useDispatch(action, payload)

const onDetected = (code) => {
  console.log(`Code: ${code}`);
  fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
    .then((data) => data.json())
    .then((json) => {
      console.log(json); //connect to store
      dispatch(action, payload.json)
    });
};

export const App = () => {
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
      
    </div>
    </Provider>
  );
};
