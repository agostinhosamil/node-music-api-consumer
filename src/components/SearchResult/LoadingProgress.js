import { Fragment } from 'react'
import { LoadingProgressContainer, LoadingProgressElement } from './styles'

export const LoadingProgress = ({ show }) => {
  if (!show) return <Fragment />

  return (
    <LoadingProgressContainer>
      <LoadingProgressElement 
        src="/loader.gif" 
        width="45"
        />
    </LoadingProgressContainer>
  )
}