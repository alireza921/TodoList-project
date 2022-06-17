import Todo from "../../components/todo/todo";
const UnCompeleteTodo = ({ todos }) => {
  const selectedTodo = todos.filter((todo) => !todo.iscompelete);
  console.log(selectedTodo);

  return (
    <div> 
        <h2> UnCompeleteTodo</h2> 
    <div>
      {selectedTodo.map((todo) => (
          <Todo todo={todo}/>
          ))}
    </div>
          </div>
  );
};

export default UnCompeleteTodo;
