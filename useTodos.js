import { todoReducer } from "./../08-useReducer/TodoReducer";
import { useEffect , useReducer } from "react";



const init = () =>{ // inicializamos el reducer
    return JSON.parse(localStorage.getItem('todos')) || []; // parsea y saca los items del storage con esos datos inicializa el reducer
}

export const useTodos = () =>{
    const [todos, dispatch] = useReducer(todoReducer, [] , init); // estado inicial es un arreglo vacio

    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos]) // cuando cambia el todos , se agrega alguno eso que se agrega va al localStorage
    

    const handleNewTodo = (todo) => {  // funcion que manda la accion de agregar al reducer

        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action);
    }

    const handleDeleteTodo = ( id ) =>{ // funcion que manda el borrar al reducer
        const action = {
            type : '[TODO] Remove Todo',
            payload : id
        }
        dispatch(action)
    }

    const handleToogleTodo = (id) =>{
        const action = {
            type : '[TODO] Toogle Todo',
            payload : id,
        }
        dispatch(action)
    }

   /*  const todosCount = (todo) =>{
        console.log(todos)
        const action = {
            type :'[TODO] Count Todo',
            payload : todo,
        }
        dispatch(action)
    }
    const pendingTodosCount = (todo) =>{
        console.log(todo)
        const action = {
            type : '[TODO] Pending Todo',
            payload : todo,
        }
        dispatch(action)
    } */
    
    return {
        todos ,
        handleNewTodo,
        handleDeleteTodo,
        handleToogleTodo,
        todosCount : todos.length,
        pendingTodosCount : todos.filter(todo => !todo.done).length,
    }

}