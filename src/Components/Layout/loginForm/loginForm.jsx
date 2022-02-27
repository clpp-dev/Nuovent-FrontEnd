import "./Style.css";
import React, { useState } from 'react';
import jwt from "jwt-decode";
import { Route, Redirect } from 'react-router-dom'

export const LoginForm = () => {
    
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")

    const newLogin = async (e) => {
        e.preventDefault();
        // console.log(`ENVIANDO... ${email}, ${password}`)
        const res = await fetch('https://nuovent.herokuapp.com/login',{
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
        var token = await data.token;
        console.log("🚀 ~ file: loginForm.jsx ~ line 26 ~ newLogin ~ token", token)
        
        //Guardo en local storage el token
        localStorage.setItem('token', token);
        var decoded = await jwt(token);
        var satateUser= await decoded.claims.state
        console.log("🚀 ~ file: loginForm.jsx ~ line 34 ~ newLogin ~ satateUser", satateUser)
        console.log("🚀🚀🚀~decoded CLAIMS", decoded)
    
        // setEmail("");
        // setPassword("");

    }

    return (
        <div className="contFormLogin">
            <form onSubmit={newLogin}
            className="formLogin">

                <h2 className="">Login</h2>

                <label className="">Email / Nombre de usuario</label>
                <input 
                onChange={e =>setEmail(e.target.value)}
                value={email}
                className=""
                type="text"
                placeholder="Email o nombre de usuario"
                />

                <label className="">Contraseña</label>
                <input
                onChange={e =>setPassword(e.target.value)}
                value={password}
                className=""
                type="password"
                placeholder="Contraseña"
                />

                <button className="button">Enviar</button>
            </form>
        </div>
    )
}
