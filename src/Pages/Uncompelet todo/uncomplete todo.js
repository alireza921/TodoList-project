import Todo from "../../components/todo/todo";
import styles from './uncompleteTodo.module.css'
const UnCompeleteTodo = ({ todos }) => {
  const selectedTodo = todos.filter((todo) => !todo.iscompelete);
  console.log(selectedTodo);

  return (
    <div> 
        <h2> UnCompeleteTodo</h2> 
    <div className={styles.todoHolder}>
      {selectedTodo.map((todo) => (
          <Todo todo={todo}/>
          ))}
    </div>
          </div>
  );
};

export default UnCompeleteTodo;
