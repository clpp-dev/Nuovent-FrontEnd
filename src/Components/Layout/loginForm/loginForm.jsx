import "./Style.css";
import React, { useState } from 'react';
import jwt from "jwt-decode";
import { useNavigate } from 'react-router-dom'

export const LoginForm = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")

    const newLogin = async (e) => {
        e.preventDefault();
        const res = await fetch('https://nuoventr.herokuapp.com/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        const data = await res.json();
        console.log("🚀 ~ file: loginForm.jsx ~ line 25 ~ newLogin ~ data", data)
        let token = await data.token;
        console.log("🚀 ~ file: loginForm.jsx ~ line 26 ~ newLogin ~ token", token)
        
        //Guardo en local storage el token
        localStorage.setItem('token', token);
        let decoded = await jwt(token);
        let stateUser= await decoded.claims.state
        console.log("🚀 ~ file: loginForm.jsx ~ line 33 ~ newLogin ~ stateUser", stateUser)
        console.log("🚀🚀🚀~decoded CLAIMS", decoded)
        // stateUser === 2 ? navigate("/crearanuncio") : alert("Datos invalidos")
        stateUser === "1" ? navigate("/home") :
        stateUser === "2" ? navigate("/crearanuncio") :
        stateUser === "3" ? alert("USTED ES UN PROVEEDOR") : alert("datos Invalidos")

        // setEmail("");
        // setPassword("");
    }

    return (
        <div className="w-75">
            <form onSubmit={newLogin}
            className="">
                <h2 className="">Login</h2>
                <div className="form-floating mb-3">
                    <input
                        onChange={e =>setEmail(e.target.value)}
                        value={email}
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email ó Nombre de usuario</label>
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


                {/* <label className="">Email / Nombre de usuario</label>
                <input 
                onChange={e =>setEmail(e.target.value)}
                value={email}
                className=""
                type="text"
                placeholder="Email o nombre de usuario"
                /> */}

                {/* <label className="">Contraseña</label>
                <input
                onChange={e =>setPassword(e.target.value)}
                value={password}
                className=""
                type="password"
                placeholder="Contraseña"
                /> */}