import "./Style.css"
import React from 'react'
import PropTypes from 'prop-types'
import { NavBar } from "../../Layout/NavBar/NavBar"
import { Featured } from "../../Layout/Featured/Featured"
import { SectionOfferYourSpace } from "../../Layout/SectionOfferYourSpace/SectionOfferYourSpace"

export const Home = () => {
  return (
    <>
      <NavBar/>
      <Featured/>
      <SectionOfferYourSpace/>
    </>
  )
}

Home.propTypes = {

}