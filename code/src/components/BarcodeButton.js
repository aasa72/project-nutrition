import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BarcodeScanner } from './BarcodeScanner'
import { fetchData } from  "reducers/data"

export const BarcodeButton = () => {
  const [showScanner, setShowScanner] = useState(false)
  const dispatch = useDispatch()
  
  return (
    <>
      {!showScanner && ( <>
        <button type="button" onClick={() => setShowScanner(true)}>
          Show scanner
        </button>
        </>
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