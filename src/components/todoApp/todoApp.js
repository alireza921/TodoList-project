import { Routes, Route, useNavigate } from "react-router-dom";
import NewTodo from "../../Pages/create todo/newTodo";
import CompeleteTodo from "../../Pages/compelete todo/compelete todo";
import UnCompeleteTodo from "../../Pages/Uncompelet todo/uncomplete todo";
import Home from "../../Pages/home/home";
import NotFound from "../../Pages/NotFound/NotFound";
import { useState } from "react";
import TodoDetail from "../../Pages/todoDetail/todoDetail";
import { useTodo, useTodoAction } from "../../context/contextProvider";

const TodoApp = () => {
  // const [todos, setTodo] = useState([]);
  const todos = useTodo() ; 
  const setTodo = useTodoAction() ;
  const navigaet = useNavigate();
  function addTodoHandler(newTodo) {
    setTodo([
      ...todos,
      { ...newTodo, id: Math.floor(Math.random() * 1000), iscompelete: false },
    ]);
  }

  const compeleteTodoHandler = (id) => {
    const index = todos.findIndex((p) => id === p.id);

    const selectedTodo = { ...todos[index] };

    selectedTodo.iscompelete = !selectedTodo.iscompelete;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodo(updatedTodos);
  };
  const deleteTodoHandler = (id) => {
    console.log(id);
    const selectedItem = todos.filter((todo) => todo.id !== id);
    console.log(selectedItem);
    setTodo(selectedItem);
    navigaet("/");
  };
  // console.log(todos);

  return (
    <section>
      <Routes>
        <Route path='/' element={<Home todos={todos} />} />
        <Route
          path='/todo/:id'
          element={
            <TodoDetail
              onCompeleteTodo={compeleteTodoHandler}
              onDelete={deleteTodoHandler}
            />
          }
        />
        <Route
          path='/newtodo'
          element={<NewTodo onAddTodo={addTodoHandler} />}
        />

        <Route path='/compelete' element={<CompeleteTodo todos={todos} />} />

        <Route
          path='/uncompelete'
          element={<UnCompeleteTodo todos={todos} />}
        />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default TodoApp;
