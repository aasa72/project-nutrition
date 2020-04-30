import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from "../reducers/data"

  export const InputCodeManually = () => {
    const [showInput, setInput] = useState(false)
    const [code, setCode] = useState([])
    const dispatch = useDispatch()
  
    const handleSubmit = e => {
      e.preventDefault()
      dispatch(fetchData(code))
      setCode([])
    }
  
    return (
      <>
        <form onSubmit={handleSubmit}>
            <input
              type='text'
              value={code}
              onChange={e => setCode(e.target.value)}
              placeholder='Enter barcode number...'
              required
            />
            <button type='submit'>find product</button>
          </form>  
    <p>{code.product_name}</p>
      </> 
    )
  }