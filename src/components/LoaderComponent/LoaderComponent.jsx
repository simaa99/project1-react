import React from 'react'
import './style.css'
import imgLoader from '../../assets/output-onlinegiftools.gif'
function LoaderComponent() {
  return (
    <div className='loader'>
    <img  src={imgLoader}/>

    </div>
  )
}

export default LoaderComponent