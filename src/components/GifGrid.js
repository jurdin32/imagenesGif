import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GitGridItem } from './GitGridItem';

const GifGrid = ({ categoria }) => {

   const {data, loading} =useFetchGifs(categoria);

   console.log(data,loading);
    
    return (
        <>
        <h3 className='animate__animated animate__fadeIn'>{categoria}</h3>
       
        <div className='card-grid'>
            { loading? <p className='animate__animated animate__flash'>Cargando..</p>:null}
            <ol>
                {
                   
                    data.map((img)=>(
                        <GitGridItem 
                        key={img.id}
                        {...img}
                        />
                    ))
                }
            </ol>
        </div>
        </>
    )
}

export default GifGrid;
