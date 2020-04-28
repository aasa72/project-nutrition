import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const ScannedInfo = () => {
  const test = useSelector((state) => state.data.list.items)
  return (
<p>{test[0].color}</p>
 //här gör vi en map med namn och land (gröna rutan)
  )
}