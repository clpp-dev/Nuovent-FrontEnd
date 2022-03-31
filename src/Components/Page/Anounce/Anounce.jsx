import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Carousel } from '../../UI/Carousel/Carousel';
import './Style.css'

export const Anounce = () => {

  let params = useParams();

  const [currentAnounce, setCurrentAnounce] = useState("")

  const urlApi = `https://nuoventr.herokuapp.com/anuncios/${params.IdAnounce}`
  // console.log("🚀 ~ line 11 urlApi", urlApi)
  const fetchCurrentAnounces = async (url) =>{
      fetch(url)
      .then(response => response.json())
      .then(data => setCurrentAnounce(data))
      .catch(error => console.log(error))
  }

  useEffect(() =>{
    fetchCurrentAnounces(urlApi)
  },[])


  return (
    <Carousel/>
  )
}

    // <div className="container my-5 p-5 bg-info">
    //   Anounce ID ---= {params.IdAnounce}

    // </div>