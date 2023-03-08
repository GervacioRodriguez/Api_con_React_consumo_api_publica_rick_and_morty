//importamos la carpeta
import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Personajes from "./Components/Personajes";
import Pagination from "./Components/Pagination";
//el llamado sera mediante fetch 


function App() {
  const url = "https://rickandmortyapi.com/api/character";

  const [personaje, setpersonaje] = useState([]);
  const [info, setinfo] = useState({});


  const fetchPersonaje = (url) => {
    fetch(url)
      .then(response => response.json())
      .then((data) =>
       {
        setpersonaje(data.results);
        setinfo(data.info);
       })
      .catch(error => console.log(error));
  };

  const onPrevious =()=>{
    fetchPersonaje(info.prev);
  }

  const onNext =()=>{
    fetchPersonaje(info.next);
  }

  useEffect(() => {
    //llamamos la funcion
    fetchPersonaje(url);
  }, [])

  return (
    <>
      <Navbar />

      <div class ="container mt-3">
        <Pagination  prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
        <Personajes personajes={personaje}/>
      </div>
    </>
  );
}
export default App;


