import React from 'react'

const Personajes = ({personajes}) => {
  return (
        <div class="row row-cols-1 row-cols-md-3 g-4">
            {
                personajes.map((item,index)=>(
                    <div key={index} class="col mb-4">
                         <div class="card border-success h-100" style={{minWidth:"200px"}}>
                            <img class="card-img" src={item.image} alt=""/>
                            <div class="card-body">
                                <h5 class="card-header bg-transparent border-success">{item.name}</h5>
                                <p class="card-subtitle mb-auto">Specie: {item.species}</p>
                                <p class="card-subtitle mb-auto">Gender: {item.gender}</p>
                                <p class="card-subtitle mb-auto">Origen: {item.origin.name}</p>
                                <p class="card-subtitle mb-auto">Location: {item.location.name}</p>
                            </div>
                         </div>
                    </div>
                ))}
        </div>
    )
}

export default  Personajes