import { useState } from "react"

export const useCounter = (initialValue = 10) => {

  const [counter, setCounter] = useState(initialValue)

  const increment = (value = 1) =>{
    setCounter ((current)=>current + value)
  }
  
  const decrement = (value = 1) =>{
    //if (counter === 0) return; // si decrementamos hasta 0 deja de decrementar
    setCounter ((current)=> current - value)
  }

  const reset = () =>{
    setCounter(initialValue)
  }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}

/**
 * creamos una funcion useCounter con un valor inicial de 10
 * 
 * creamos una const useState 
 * 
 * creamos una funcion para incrementar otra para decrementar
 * y otra para resetear
 * 
 * devolvemos (return) un objeto () el cual devuelve la const estadp
 * y las funciones que la modifican
 */