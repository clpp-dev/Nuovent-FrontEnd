import "./Style.css";
import React, { useState } from 'react';
import jwt from "jwt-decode";

export const RegistryForm = () => {
    const [nombre, setNombre] = useState ("")
    const [typeDoc, setTypeDoc] = useState ("")
    const [numDoc, setNumDoc] = useState ("")
    const [userName, setUserName] = useState ("")
    const [phone, setPhone] = useState ("")
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")

    const newRegistry = async (e) => {
        e.preventDefault();
        const res = await fetch('https://nuoventr.herokuapp.com/registro',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre,
                typeDoc,
                numDoc,
                userName,
                phone,
                email,
                password
            })
        })
        // const data = await res.json();
        // console.log(data)
        // var token = data;
        // var decoded = await jwt(token);

        // console.log("🚀🚀🚀~decoded UID", decoded.uid)

        setNombre("");
        setTypeDoc("");
        setNumDoc("");
        setUserName("");
        setEmail("");
        setPassword("");
    }

    return (
            <div className="w-100 d-flex justify-content-center">
            <form onSubmit={newRegistry}
            className="w-75">
                <div className="form-floating mb-3">
                    <input
                        onChange={e =>setNombre(e.target.value)}
                        value={nombre}
                        type="text"
                        className="form-control"
                        id="floatingInputName"
                        placeholder="name@example.com"/>
                    <label htmlFor="floatingInputName">Nombre*</label>
                </div>
                <div className="row ">
                    <div className="form-floating col-md-4">
                        <select
                            onChange={e =>setTypeDoc(e.target.value)}
                            value={typeDoc}
                            id="inputState"
                            className="form-select">
                            <option defaultValue>Tipo documento</option>
                            <option >CC</option>
                            <option>NIT</option>
                        </select>
                    </div>
                    <div className="form-floating mb-3 col-md-8">
                        <input
                            onChange={e =>setNumDoc(e.target.value)}
                            value={numDoc}
                            type="text"
                            className="form-control"
                            id="floatingInputTypeDoc"
                            placeholder="name@example.com"/>
                        <label htmlFor="floatingInputTypeDoc">Número Documento</label>
                    </div>
                </div>
                
                <div className="row ">
                    <div className="form-floating col-md-4">
                        <input
                            onChange={e =>setUserName(e.target.value)}
                            value={userName}
                            type="text"
                            className="form-control"
                            id="floatingInputUserName"
                            placeholder="name@example.com"/>
                        <label htmlFor="floatingInputUserName">Nombre de usuario</label>
                    </div>
                    <div className="form-floating mb-3 col-md-8">
                        <input
                            onChange={e =>setPhone(e.target.value)}
                            value={phone}
                            type="number"
                            className="form-control"
                            id="floatingInputPhone"
                            placeholder="name@example.com"/>
                        <label htmlFor="floatingInputPhone">Numero de telefono</label>
                    </div>
                </div>

                <div className="form-floating mb-3">
                    <input
                        onChange={e =>setEmail(e.target.value)}
                        value={email}
                        type="email"
                        className="form-control"
                        id="floatingInputEmail"
                        placeholder="name@example.com"/>
                    <label htmlFor="floatingInputEmail">Email ó Nombre de usuario</label>
                </div>
                <div className="form-floating">
                    <input
                        onChange={e =>setPassword(e.target.value)}
                        value={password}
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"/>
                    <label htmlFor="floatingPassword">Contraseña</label>
                </div>
                <button type="submit" className="btn btn-primary mt-3 form-control p-2 fs-5">Enviar</button>

                
            </form>
        </div>
    )
}
