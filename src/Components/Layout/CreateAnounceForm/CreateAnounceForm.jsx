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
    setArrayImages([]);
  };

  function numImagesError(e) {
    e.target.value = null;
    alert("Error: SOLO PUEDE SUBIR HASTA 6 IMAGENES")
  }

  return (
    
      <div className="w-100 d-flex justify-content-center pt-5 pb-5">
            <form onSubmit={newAnounce} className="w-75">
                <div className="form-floating mb-3">
                    <input
                        onChange={(e) => setNomAnounce(e.target.value)}
                        value={nomAnounce}
                        name="nomAnounce"
                        type="text"
                        className="form-control"
                        id="floatingInputTittleAnounce"
                        placeholder="name@example.com"/>
                    <label htmlFor="floatingInputTittleAnounce">Título del Anuncio</label>
                </div>
                
                <div className="form-floating mb-3">
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        type="text"
                        className="form-control"
                        id="floatingInputUserName"
                        placeholder="name@example.com"/>
                    <label htmlFor="floatingInputUserName">Descripcion</label>
                </div>

                <div className="row ">
                  <div className="form-floating col-md-4">
                    <select
                      onChange={(e) => setLocation(e.target.value)}
                      value={location}
                      id="inputLocation"
                      className="form-select" >
                      <option defaultValue>Ubicación</option>
                      <option>Armenia</option>
                      <option>Montenegro</option>
                      <option>Tebaida</option>
                      <option>Calarca</option>
                      <option>Quimbaya</option>
                      <option>Genova</option>
                      <option>Filandia</option>
                      <option>Buenavista</option>
                      <option>Circasia</option>
                      <option>Cordoba</option>
                      <option>Pijao</option>
                    </select>
                  </div>
                  <div className="form-floating mb-3 col-md-8">
                    <input
                      onChange={(e) => setNumCapacity(e.target.value)}
                      value={numCapacity}
                      type="text"
                      className="form-control"
                      id="floatingInputCapacity"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInputCapacity">Capacidad</label>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="formFileMultiple" className="form-label">
                    Sube hasta 6 imágenes
                  </label>
                  <input
                    onChange={(e) => {
                      e.target.files.length >= 7 || e.target.files.length < 0
                        ? numImagesError(e)
                        : setArrayImages(e.target.files);
                    }}
                    className="form-control"
                    name="file"
                    type="file"
                    id="formFileMultiple"
                    multiple
                  />
                </div>

                <button type="submit" className="btn btn-primary mt-3 form-control p-2 fs-5">Enviar</button>

                
            </form>
        </div>

  );
};
