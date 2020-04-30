import React from "react";
import { Provider, useDispatch, useSelector } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { data } from './reducers/data';
import { ui } from './reducers/ui';
import { BarcodeButton } from './components/BarcodeButton';
import { BarcodeScanner } from './components/BarcodeScanner';
import { ScannedInfo } from './components/ScannedInfo'
import { InputCodeManually } from 'components/InputCodeManually'
import { CountryDropdown } from './components/CountryDropdown'


const reducer = combineReducers ({
  data: data.reducer,
  ui: ui.reducer
});

const store = configureStore({reducer});

export const App = () => {
 
    return (
    <Provider store={store}>
    <div>
      
      <BarcodeButton />
      <InputCodeManually />
      <ScannedInfo />
    </div>
    </Provider>
  )
  }