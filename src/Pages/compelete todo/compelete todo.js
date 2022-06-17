import Todo from "../../components/todo/todo";
import styles from './compeleteTodo.module.css'
const CompeleteTodo = ({ todos }) => {
  const selectedTodo = todos.filter((todo) => todo.iscompelete);
  console.log(selectedTodo);

  return (
    <div>
      <h2> CompeleteTodo</h2>
      <div className={styles.todoHolder}>
        {selectedTodo.map((todo) => (
          <Todo todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default CompeleteTodo;
