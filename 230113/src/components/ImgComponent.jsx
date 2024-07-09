import React from 'react'
import logo from '../logo.svg'

export default function ImgComponent() {
  return (
    <div>
        <img src={logo} alt="사진" style={{width: "300px"}}/>
    </div>
  )
}
