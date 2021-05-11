

import React, { useEffect, useState } from 'react'
import { GetGif } from '../helpers/GetGif'

export const useFetchGifs = (categoria) => {
  
    const [state, setstate] = useState({
        data:[],
        loading:true,
    })

    useEffect(() => {
        
        GetGif( categoria).then(imgs =>{
            
                setstate({
                    data:imgs,
                    loading:false,
                })
        
        })


    }, [categoria])

    
    return state;

}
