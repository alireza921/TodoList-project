import { createContext, useContext, useReducer, useState } from "react";

const TodoContext = createContext();
const TodoContextDispatcher = createContext();

const TodoContextProvider = ({ children }) => {
    const[todos,dispatch] = useState([]) ;
  return (
    <TodoContext.Provider value={todos} >
      <TodoContextDispatcher.Provider value={dispatch}>
        {children}
      </TodoContextDispatcher.Provider>
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;

export const useTodo = () => useContext(TodoContext);
export const useTodoAction = () => useContext(TodoContextDispatcher);
