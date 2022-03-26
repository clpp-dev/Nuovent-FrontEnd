import "./Style.css"
import React from 'react'
import ImgLogo from '../../../Img/logo-500x500.png'

export const Logo = () => {
  return (
      <a className="navbar-brand" href="#">
        <img src={ImgLogo} alt="Nuovent.com" width={50} height={50} className="d-inline-block align-text-top" />
      </a>
  )
}






