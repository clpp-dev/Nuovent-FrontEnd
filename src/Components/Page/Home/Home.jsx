import "./Style.css"
import React from 'react'
import PropTypes from 'prop-types'
import { NavBar } from "../../Layout/NavBar/NavBar"
import { Featured } from "../../Layout/Featured/Featured"
import { SectionOfferYourSpace } from "../../Layout/SectionOfferYourSpace/SectionOfferYourSpace"
import { RegistryForm } from "../../Layout/RegistryForm/RegistryForm"

export const Home = () => {
  return (
    <>
      <RegistryForm/>
      <NavBar/>
      <Featured/>
      <SectionOfferYourSpace/>
    </>
  )
}

Home.propTypes = {

}