
import React, { useState } from 'react'
import PropTypes from 'prop-types'


const AddCategorias = ({setcategorias}) => {

    const [inputValue, setinputValue] = useState()

    const inputChange = (e) =>{
        setinputValue(e.target.value)
    }

    const enviar = (e) =>{
        e.preventDefault()
        if (inputValue.trim().length>2){
            setcategorias(cat =>[inputValue,...cat]) 
            setinputValue('')
        }
            
        
    }

    return (
        <form onSubmit ={enviar}>
            <input
                type='text'
                value={ inputValue }
                onChange={ inputChange  }
            />

        </form>
    )
}

AddCategorias.protoType={
    setcategorias: PropTypes.func.isRequired
}

export default AddCategorias
