import { Link, useParams } from "react-router-dom";
import styles from "./todo.module.css";
const Todo = ({ todo, onCompelete, onDelete }) => {
  return (
    <Link key={todo.id} to={`/todo/${todo.id}`} state={todo}>
      <div className={styles.todoHolder}>
        <div
          className={
            todo.iscompelete ? `${styles.compelete}` : `${styles.unCompelete}`
          }>
          <p className={styles.date}> {todo.date} </p>
          <h2> {todo.title} </h2>
          <p> {todo.describtion} </p>
          <div>
            <button className={styles.btn} onClick={() => onCompelete(todo.id)}>
              compelete
            </button>
            <button className={styles.btn} onClick={() => onDelete(todo.id)}>
              delete
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Todo;
