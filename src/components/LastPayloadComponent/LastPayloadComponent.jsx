import React from 'react'
import './style.css'
function LastPayloadComponent({CircleImg,TextInput}) {
  return (
    <div className='payload-view'>
        <div className='img-circle-view'>
            <img src={CircleImg} alt="iamge-circle" />
        </div>
        <div className='text-payload'>
            <p>{TextInput}</p>
        </div>
    </div>
  )
}

export default LastPayloadComponent