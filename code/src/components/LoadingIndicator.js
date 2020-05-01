import React from 'react'
import { useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'
import styled from 'styled-components/macro'


export const LoadingIndicator = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)

  return(
    <LoadingImg>
      {isLoading && (
      <Loader 
        type="Puff"
        color="rgb(88,116,3)"
        height={100}
        width={100}
        timeout={3000} 
        />
      )})
    </LoadingImg>
  )
}






export const LoadingSpinner = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)

  return (
    <LoadingIcon>
      {isLoading && (
        <Loader
          type="ThreeDots"
          color="black"
          height="150"
          width="150"
        />
      )}
    </LoadingIcon>
  )
}

const LoadingIcon = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 1em;
`