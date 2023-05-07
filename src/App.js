import React from 'react';
import {useState, useEffect} from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticia from "./components/ListadoNoticia";

function App() {

  const [categoria, setCategoria] = useState('')
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=846723b853bf44cdba57fbc1b1d3e586`

      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      setNoticias(resultado.articles)
    }
    consultarAPI()
  }, [categoria])

  return (
    <>
      <Header
      
      titulo='Buscador de Noticias'
      />
      
      <div className='container white'>
        <Formulario
          setCategoria={setCategoria}
        />

        <ListadoNoticia
        noticias={noticias}
        />
      </div>
    </>
  )
}

export default App;
