import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { data } from '../reducers/data'

export const ScannedInfo = () => {
  const scannedItem = useSelector((state) => state.data.item)
  //const scannedItemArr =
  //Object.entries(scannedItem).map(([key, value]) => [key, value])

  return (
    <div>
      <p>Code:{scannedItem.code}</p>
    </div>
    
  )
}  //Nedanstående kod är vad vi vill visa i ovanstående <div>,istället för Code men vi får felmeddelande att product_name/manufactioring_places_tags inte går att hitta. Läste någonstans att man då kan göra en .map men det fungerar inte heller eftersom product är ett object. Utkommenterade const scannedItemArr var ett försök att omvandla objektet till en array, vilket inte heller funkade.

//<p>Name:{scannedItem.product.product_name}</p>
//<p>Country:{scannedItem.product.manufactoring_places_tags}</p>


    