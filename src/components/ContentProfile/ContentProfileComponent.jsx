import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import SlideComponent from '../SlideComponent/SlideComponent'
import OtherSectionComponent from '../OtherSectionComponent/OtherSectionComponent'

import './style.css'
function ContentProfileComponent() {
  return (
    <div className='content-user'>
        <HeaderComponent/>
        <SlideComponent/>
        <OtherSectionComponent/>
     
    </div>
  )
}

export default ContentProfileComponent