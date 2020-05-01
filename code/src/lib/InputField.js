import React from 'react'
import styled from 'styled-components/macro'

export const InputField = ({ title,  background }) => {
  return (
    <Input/>
  )
}

const Input = styled.input`
  background-color: #F2F2F2;
  font-size: 18px;
  border-radius: 6px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
  margin: 10px;
  padding: 10px;
`
