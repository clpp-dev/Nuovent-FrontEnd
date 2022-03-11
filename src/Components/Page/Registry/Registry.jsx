import React from 'react'
import './Style.css'
import { RegistryForm } from '../../Layout/RegistryForm/RegistryForm'

export const Registry = () => {
  return (
    <div className="container mt-4 d-flex flex-column justify-content-center align-content">
        <h1>Registro</h1>
        <hr/>
        <RegistryForm/>
    </div>
  )
}
