import "./Style.css";
import React, { useState } from "react";
import jwt from "jwt-decode";

export const CreateAnounceForm = () => {
  const [nomAnounce, setNomAnounce] = useState("");
  const [description, setDescription] = useState("");
  const [numCapacity, setNumCapacity] = useState("");
  const [location, setLocation] = useState("");
  const [arrayImages, setArrayImages] = useState(null);

  const newAnounce = async (e) => {
    e.preventDefault();
    
    const res = await fetch("https://nuovent.herokuapp.com/anuncio", {
      method: "POST",
      headers: {
        // "Content-Type": "application/json",
        "Content-Type": "application/form-data",
      },
      // body: JSON.stringify({
      //   nomAnounce,
      //   description,
      //   numCapacity,
      //   location,
      //   arrayImages
      // }),
      body:(
        nomAnounce,
        description,
        numCapacity,
        location,
        formData
      ),
    });
    const data = await res.json();
    console.log(data);
    // var token = data;
    // var decoded = await jwt(token);
    // console.log("🚀🚀🚀~decoded UID", decoded.uid);

    setNomAnounce("");
    setDescription("");
    setNumCapacity("");
    setLocation("");
    setArrayImages(null);
  };

  var formData = new FormData();

  return (
    <div className="cont-fromNewAnounce">
      <form onSubmit={newAnounce} className="formNewAnounce">
        <h2 className="">Crear nuenvo Anuncio</h2>

        <label className="">Titulo del anuncio</label>
        <input
          onChange={(e) => setNomAnounce(e.target.value)}
          value={nomAnounce}
          className=""
          type="text"
          placeholder="Titulo del anuncio"
          required
        />

        <label className="">Descripcion*</label>
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className=""
          type="text"
          placeholder="Descripcion"
          required
        />

        <label className="">Capacidad</label>
        <input
          onChange={(e) => setNumCapacity(e.target.value)}
          value={numCapacity}
          className=""
          type="text"
          placeholder="Capacidad"
          required
        />

        <label className="">Ubicación</label>
        <input
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          className=""
          type="text"
          placeholder="Ubicación"
          required
        />

        <label className="">Sube imágenes</label>
        <input
          name="images"
          type="file"
          accept="image/png, .jpeg, .jpg"
          multiple
          onChange={(e) => {
            
            var files = e.target.files
            console.log("🚀 ~ files", files)
            
            for (let i = 0; i < e.target.files.length; i++)
            {
              formData.append(`file`, e.target.files[i])
              // console.log(`imagen ${i}`, e.target.files[i], e.target.files[i].name) 
              console.log(`file${i}`, e.target.files[i]) 
            }  
            console.log("🚀 ~~ formData", formData)
            
            setArrayImages(formData)
            console.log(arrayImages)
          }}
        />

        <button className="button">Crear Anuncio</button>
      </form>
    </div>
  );
};
