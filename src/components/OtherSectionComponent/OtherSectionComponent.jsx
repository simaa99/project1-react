import React from 'react'
import TextComponent from '../TextComponent/TextComponent'
// import freiendImg from '../../assets/'
import LastPayloadComponent from '../LastPayloadComponent/LastPayloadComponent'
function OtherSectionComponent() {
  return (
    <div>
        <div>
        <TextComponent text="last played" />
        <LastPayloadComponent/>

        </div>
        <div>
        <TextComponent text="most recent trophy" />
        {/* <img src="" alt="" /> */}


        </div>
        <div>
        <TextComponent text="friends" />
        <img src="" alt="" />


        </div>
    </div>
  )
}

export default OtherSectionComponent