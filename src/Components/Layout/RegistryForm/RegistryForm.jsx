import "./Style.css"
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import jwt from "jwt-decode";

export const RegistryForm = () => {
    const [nombre, setNombre] = useState ("")
    const [typeDoc, setTypeDoc] = useState ("")
    const [numDoc, setNumDoc] = useState ("")
    const [userName, setUserName] = useState ("")
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")
    // const [token, setToken] = useState ({})

    const newRegistry = async (e) => {
        e.preventDefault();
        // console.log(`ENVIANDO... ${email}, ${password}`)
        const res = await fetch('https://nuovent.herokuapp.com/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre,
                typeDoc,
                numDoc,
                userName,
                email,
                password
            })
        })
        const data = await res.json();
        var token = await data.token; 
        // console.log(`TOKENN: ${token}`);
        var decoded = await jwt(token);
        console.log("🚀🚀🚀~decoded UID", decoded.uid)

        console.log(data)
        setNombre("");
        setTypeDoc("");
        setNumDoc("");
        setUserName("");
        setEmail("");
        setPassword("");
        alert(data)
    }

    return (
        <div className="">
            <form onSubmit={newRegistry}
            className="">

                <h2 className="">Registro</h2>

                <label className="">Nombre*</label>
                <input 
                onChange={e =>setNombre(e.target.value)}
                value={nombre}
                className=""
                type="text"
                placeholder="Nombre"
                />

                <label className="">Tipo Documento*</label>
                <input 
                onChange={e =>setTypeDoc(e.target.value)}
                value={typeDoc}
                className=""
                type="text"
                placeholder="Tipo Documento"
                />

                <label className="">Numero de documento</label>
                <input 
                onChange={e =>setNumDoc(e.target.value)}
                value={numDoc}
                className=""
                type="text"
                placeholder="Numero de documento"
                />

                <label className="">Nombre de usuario</label>
                <input 
                onChange={e =>setUserName(e.target.value)}
                value={userName}
                className=""
                type="text"
                placeholder="Apellidos"
                />

                <label className="">Email*</label>
                <input 
                onChange={e =>setEmail(e.target.value)}
                value={email}
                className=""
                type="email"
                placeholder="Email"
                />

                <label className="">Password*</label>
                <input
                onChange={e =>setPassword(e.target.value)}
                value={password}
                className=""
                type="password"
                placeholder="Password"
                />

                <button className="button">Enviar</button>
            </form>
        </div>
    )
}

RegistryForm.propTypes = {

}