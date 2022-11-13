export const todoReducer = (initialState = [], action) => {
    
  switch (action.type) {
    case '[TODO] Add Todo':
        return [...initialState , action.payload] // agrega el payload que pasamos al estado
    case '[TODO] Remove Todo':
        return initialState.filter((todoItem) => todoItem.id !== action.payload); // filter ya regresa un nuevo arreglo no lo estamos mutando
    case '[TODO] Toogle Todo':
        return initialState.map((todoItem) => {
            if (todoItem.id === action.payload){ // si el id es igual al id que manda el payload
                return { // devolvemos el spread del item , 
                    ...todoItem ,
                     done : !todoItem.done // pero cambiamos el a lo contrario que tiene el done
                }
            }  
            return todoItem; // de lo contrario devuelve el item sin tocar
        })
    default:
      return initialState;
  }
};
export default todoReducer;