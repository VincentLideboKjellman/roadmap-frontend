import React from 'react'
import Loader from 'react-loader-spinner'

const LoaderComponent = () => {
  return (
    <Loader
      type='TailSpin'
      color='var(--vgr-primary-bg)'
      height={150}
      width={150}
    />
  )
}

export default LoaderComponent
