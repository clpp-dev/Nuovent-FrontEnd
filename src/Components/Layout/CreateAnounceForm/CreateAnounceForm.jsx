import "./Style.css";
import React, { useState } from 'react';
import jwt from "jwt-decode";

export const CreateAnounceForm = () => {
    const [nomAnounce, setNomAnounce] = useState ("")
    const [description, setDescription] = useState ("")
    const [numCapacity, setNumCapacity] = useState ("")
    const [location, setLocation] = useState ("")

    const newAnounce = async (e) => {
        e.preventDefault();
        const res = await fetch('https://nuovent.herokuapp.com/anuncio',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nomAnounce,
                description,
                numCapacity,
                location,
            })
        })
        const data = await res.json();
        console.log(data)
        var token = data;
        var decoded = await jwt(token);    
        console.log("🚀🚀🚀~decoded UID", decoded.uid)

        setNomAnounce("");
        setDescription("");
        setNumCapacity("");
        setLocation("");
    }

    return (
        <div className="cont-fromNewAnounce">
            <form onSubmit={newAnounce}
            className="formNewAnounce">

                <h2 className="">Crear nuenvo Anuncio</h2>

                <label className="">Titulo del anuncio</label>
                <input 
                onChange={e =>setNomAnounce(e.target.value)}
                value={nomAnounce}
                className=""
                type="text"
                placeholder="Nombre"
                required
                />

                <label className="">Descripcion*</label>
                <input 
                onChange={e =>setDescription(e.target.value)}
                value={description}
                className=""
                type="text"
                placeholder="Tipo Documento"
                required
                />

                <label className="">Capacidad</label>
                <input 
                onChange={e =>setNumCapacity(e.target.value)}
                value={numCapacity}
                className=""
                type="text"
                placeholder="Numero de documento"
                required
                />

                <label className="">Ubicacion</label>
                <input 
                onChange={e =>setLocation(e.target.value)}
                value={location}
                className=""
                type="text"
                placeholder="Nombre de usuario"
                required
                />

                <button className="button">Crear</button>
            </form>
        </div>
    )
}
