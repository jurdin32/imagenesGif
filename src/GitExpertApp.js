
import React, { useState } from 'react'
import AddCategorias from './components/AddCategorias';
import GifGrid from './components/GifGrid';

const GitExpertApp = () => {


    const [categorias, setcategorias] = useState(['One Punch']);




    return (
        <>
           <h2>GitExpertApp</h2> 
           <AddCategorias setcategorias={ setcategorias }/>
           <hr/>
           <ol>
              {
               categorias.map( categoria =>(
                  <GifGrid 
                  key={categoria}
                  categoria={categoria}
                  />
               ))
            }
           </ol>
        </>
    )
}

export default GitExpertApp
