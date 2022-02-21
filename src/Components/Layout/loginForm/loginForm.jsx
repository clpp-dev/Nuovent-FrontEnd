import "./Style.css";
import React, { useState } from 'react';
import jwt from "jwt-decode";

export const LoginForm = () => {
    
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")
    // const [token, setToken] = useState ({})

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
        var token = await data.token;
        var decoded = await jwt(token);
        console.log("🚀🚀🚀~decoded UID", decoded.uid)

        console.log(data)
        setEmail("");
        setPassword("");
        // alert(data)
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
