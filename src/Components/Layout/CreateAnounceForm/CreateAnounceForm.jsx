import "./Style.css";
import React, { useState } from "react";

import jwt from "jwt-decode";
import axios from "axios";

export const CreateAnounceForm = () => {
  const [nomAnounce, setNomAnounce] = useState("");
  const [description, setDescription] = useState("");
  const [numCapacity, setNumCapacity] = useState("");
  const [location, setLocation] = useState("");
  const [arrayImages, setArrayImages] = useState();

var formData = new FormData();

 
  const newAnounce = async (e) => {
    e.preventDefault();
    

    formData.append("anuncio", nomAnounce);
    formData.append("descripcion", description);
    formData.append("capacidad", numCapacity);
    formData.append("localizacion", location);

  for(let i = 0; i < arrayImages.length; i++) {
    formData.append(`file${i}`,arrayImages[i])
  }
  console.log(arrayImages)
    // formData.append("imagenes", arrayImages);



    axios.post("http://127.0.0.1:5000/anuncio",formData)
    // const res = await fetch("http://127.0.0.1:5000/anuncio", {
    //   method: "POST",
    //   headers: {
    //     // "Content-Type": "application/json",
    //     "Content-Type": "application/form-data",
    //   },
    //   // body: JSON.stringify({
    //   //   nomAnounce,
    //   //   description,
    //   //   numCapacity,
    //   //   location,
    //   //   arrayImages
    //   // }),
    //   body:(
    //     nomAnounce,
    //     description,
    //     numCapacity,
    //     location,
    //     formData
    //   ),
    // });
    // const data = await res.json();
    // console.log(data);
    // // var token = data;
    // // var decoded = await jwt(token);
    // // console.log("🚀🚀🚀~decoded UID", decoded.uid);

    setNomAnounce("");
    setDescription("");
    setNumCapacity("");
    setLocation("");
    setArrayImages(null);
  };

  function numImagesError(e) {
    e.target.value = null;
    alert("Error: SOLO PUEDE SUBIR HASTA 6 IMAGENES")
  }
 

  return (
    <div className="cont-fromNewAnounce">
      <form onSubmit={newAnounce} className="formNewAnounce">
        <h2 className="">Crear nuenvo Anuncio</h2>

        <label className="">Titulo del anuncio</label>
        <input
          onChange={(e) => setNomAnounce(e.target.value)}
          value={nomAnounce}
          className=""
          name="nomAnounce"
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

        <label className="">Sube hasta 6 imágenes</label>
        <input
        // onChange={(e) => setArrayImages(e.target.files)}
        onChange={(e) => { e.target.files.length >= 7 || e.target.files.length < 0 ?  numImagesError(e) : setArrayImages(e.target.files)}
                    
      }
          name="file"
          type="file"
          accept="image/png, .jpeg, .jpg"
          multiple
        />

        <button className="button">Crear Anuncio</button>
      </form>
    </div>
  );
};
