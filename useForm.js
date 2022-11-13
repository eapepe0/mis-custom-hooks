import { useState } from "react";

export const useForm = ( initialForm = {}) => {
    
    const [formState, setFormState] = useState( initialForm ) // estado y funcion valores iniciales que le podemos dar
   
    const onInputChange = ({ target}) =>{ // funcion que al tener un cambio el input se dispara
        const { name , value } = target; // desestructuramos el nombre y el valor del input que es llamado
        setFormState({ // hacemos spread de lo ya ingresado
            ...formState ,
            [ name ] : value // modifica la del name se llama 
        })
    }

    const onResetForm = () =>{
        setFormState( initialForm ) // seteamos el formState con el valor inicial
    }
    return {
        ...formState,
        formState ,
        onInputChange,
        onResetForm,
    }
}


/**
 * Este hook devuelve el objeto cambiado , la constante state ,
 * la funcion que cambia los valores y
 * la funcion que resetea el formulario
 */