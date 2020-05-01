import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BarcodeScanner } from './BarcodeScanner'
import { fetchData } from  "reducers/data"
import { Button } from 'lib/Button'


export const BarcodeButton = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()
  
  return (
    <>
      {!showScanner && ( 
        <Button 
          type="button" onClick={() => setShowScanner(true)}
          title= "Show scanner" />
      )}
      
      {showScanner && (
        <BarcodeScanner onDetected={(code) => {
          //console.log('Got barcode', code)
          dispatch(fetchData(code))
          setShowScanner(false)
        }} />
      )}
    </>
  )
}