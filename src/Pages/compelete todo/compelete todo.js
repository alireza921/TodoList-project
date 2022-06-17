import Todo from "../../components/todo/todo";
const CompeleteTodo = ({ todos }) => {
//   console.log(todos);
  const selectedTodo = todos.filter((todo) => todo.iscompelete);
  console.log(selectedTodo);

  return (
    <div> 
        <h2> CompeleteTodo</h2> 
    <div>
      {selectedTodo.map((todo) => (
          <Todo todo={todo}/>
          ))}
    </div>
          </div>
  );
};

export default CompeleteTodo;
