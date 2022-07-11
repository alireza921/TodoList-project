import { useTodo, useTodoAction } from "../context/contextProvider";

export const searchTodos = ( value, todos ) => {
  console.log("todos", todos);
  console.log("values", value);

  const updatedTodo = [...todos];
  if (value === "") {
    return todos;
  } else {
    console.log("updatedtodo", updatedTodo);
    const filteredTodo = updatedTodo.filter((p) =>
      p.title.toLowerCase().includes(value.toLowerCase())
    );
    console.log("filterde todo", filteredTodo);
    return filteredTodo;
  }
};
