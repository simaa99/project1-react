import React from 'react'
import ThemeComponent from '../../components/ThemeComponent/ThemeComponent'
import SideBarComponent from '../../components/SideBar.jsx/SideBarComponent'
import ContentProfileComponent from '../../components/ContentProfile/ContentProfileComponent'
import './style.css'
function UserPage() {

  return (
    <>
    <div className='profile'>
    <SideBarComponent/>
    <ContentProfileComponent/>

    </div>
      </>
  )
}

export default UserPage