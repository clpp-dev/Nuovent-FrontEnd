import "./Style.css"
import React from 'react'
import PropTypes from 'prop-types'
import { ImHome } from 'react-icons/im';
import { GiPartyPopper } from 'react-icons/gi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';


export const NavButton = ({text, icon}) => {
  let navIcon = {icon}
  console.log(navIcon)
  return (
    <div className="cont-button" >
        <button className="nav-button"><ImHome/>{text}</button>
    </div>
  )
}

NavButton.propTypes = {

}



