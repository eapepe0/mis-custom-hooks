import { useState , useEffect } from 'react'


export const useFetch = ( url ) => {

    const [ state , setState ] = useState ({ // creamos un estado , y lo inicializamos
        data : null ,
        isLoading : true , // inicializamos como que esta cargando
        hasError : null ,
    })

    const getFetch = async () =>{

        setState({
            ...state,
            isLoading : true ,  // inicializamos como cargando por si se llama nuevamente , mas abajo esta en false
        })


        const resp = await fetch ( url ); // llamamos a la api
        const data = await resp.json(); // pónemos la data de la respuesta

        setState({
            data,              // cargamos la data en el objeto
            isLoading : false , // decimos que dejo de cargar
            hasError : null    // no hubo ningun error
        })
    }

    useEffect(() => {
      getFetch(); // llamamos la funcion cada vez que cambia el url
    }, [url])
    
  
  return {  // devolvemos todo casi desestructurado
        data       : state.data ,  
        isLoading  : state.isLoading,
        hasError   : state.hasError ,
    }
}
