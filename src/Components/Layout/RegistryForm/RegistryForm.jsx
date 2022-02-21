import "./Style.css";
import React, { useState } from 'react';
import jwt from "jwt-decode";

export const RegistryForm = () => {
    const [nombre, setNombre] = useState ("")
    const [typeDoc, setTypeDoc] = useState ("")
    const [numDoc, setNumDoc] = useState ("")
    const [userName, setUserName] = useState ("")
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")

    const newRegistry = async (e) => {
        e.preventDefault();
        const res = await fetch('https://nuovent.herokuapp.com/registro',{
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
        console.log(data)
        var token = data;
        var decoded = await jwt(token);
        
        console.log("🚀🚀🚀~decoded UID", decoded.uid)

        setNombre("");
        setTypeDoc("");
        setNumDoc("");
        setUserName("");
        setEmail("");
        setPassword("");
    }

    return (
        <div className="cont-fromRegistry">
            <form onSubmit={newRegistry}
            className="formRegistry">

                <h2 className="">Registro</h2>

                <label className="">Nombre*</label>
                <input 
                onChange={e =>setNombre(e.target.value)}
                value={nombre}
                className=""
                type="text"
                placeholder="Nombre"
                required
                />

                <label className="">Tipo Documento*</label>
                <input 
                onChange={e =>setTypeDoc(e.target.value)}
                value={typeDoc}
                className=""
                type="text"
                placeholder="Tipo Documento"
                required
                />

                <label className="">Numero de documento</label>
                <input 
                onChange={e =>setNumDoc(e.target.value)}
                value={numDoc}
                className=""
                type="text"
                placeholder="Numero de documento"
                required
                />

                <label className="">Nombre de usuario</label>
                <input 
                onChange={e =>setUserName(e.target.value)}
                value={userName}
                className=""
                type="text"
                placeholder="Nombre de usuario"
                required
                />

                <label className="">Email*</label>
                <input 
                onChange={e =>setEmail(e.target.value)}
                value={email}
                className=""
                type="email"
                placeholder="Email"
                required
                />

                <label className="">Contraseña*</label>
                <input
                onChange={e =>setPassword(e.target.value)}
                value={password}
                className=""
                type="password"
                placeholder="Contraseña"
                required
                />

                <button className="button">Enviar</button>
            </form>
        </div>
    )
}
