import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'
import { carrusel } from "../variables/carrusel";

export const Inicio = () => {
  return (
    <>
        <div className='content'>
          <UncontrolledCarousel
            items={ carrusel.map( carruseles => (
              {
                caption: carruseles.caption,
                key: carruseles.key,
                src: carruseles.src
              }
            ) )}
             className="custom-carousel"
          />
        </div>
    </>
    
  )
}
