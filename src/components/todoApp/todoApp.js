import Header from "../header/header";
import { Routes, Route } from "react-router-dom";
import NewTodo from "../../Pages/create todo/newTodo";
import CompeleteTodo from "../../Pages/compelete todo/compelete todo";
import UnCompeleteTodo from "../../Pages/Uncompelet todo/uncomplete todo";
import Home from "../../Pages/home/home";
import NotFound from "../../Pages/NotFound/NotFound";
import Navigation from "../navigation/Navigation";
import { useState } from "react";
import TodoList from "../../Pages/todolist/todolist";

const TodoApp = () => {
  const [todos, setTodo] = useState([]);

  function addTodoHandler(newTodo) {
    setTodo([
      ...todos,
      { ...newTodo, id: Math.floor(Math.random() * 1000), iscompelete: false },
    ]);
  }

  const onCompeleteTodo = (id) => {
    console.log(id);
    const index = todos.findIndex((p) => p.id === id);
    const selectedTodo = { ...todos[index] };
    // console.log(todos);
    console.log(selectedTodo);
    selectedTodo.iscompelete = !selectedTodo.iscompelete;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodo(updatedTodos);
  };

  console.log(todos);
  return (
    <section>
      <Routes>
        <Route
          path='/'
          element={<Home todos={todos} onCompeleteTodo={onCompeleteTodo} />}
        />
        <Route
          path='/newtodo'
          element={<NewTodo onAddTodo={addTodoHandler} />}
        />
        {/* <Route path='/todolist' element={<TodoList todos={todos} />} /> */}
        <Route path='/compelete' element={<CompeleteTodo todos={todos} />} />
        <Route path='/uncompelete' element={<UnCompeleteTodo todos={todos} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default TodoApp;
