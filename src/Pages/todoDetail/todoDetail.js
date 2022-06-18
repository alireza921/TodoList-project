import { useLocation } from "react-router-dom";
import styles from "./tododetail.module.css";
import { BsCalendar3 } from "react-icons/bs";
const TodoDetail = ({ onCompeleteTodo, onDelete }) => {
  const location = useLocation();
  const todo = location.state;
  return (
    <section className={styles.todoDetailContainer}>
      <ul className={styles.list}>
        <li>
          <span>
            <BsCalendar3 />
          </span>
          {todo.date}
        </li>
        <li>
          <h4> title : </h4>
          <h2>{todo.title}</h2>
        </li>
        <li>
          <h4> describtion : </h4>
          <p> {todo.describtion}</p>
        </li>
      </ul>
      <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={() => onCompeleteTodo(todo.id)}>
          {todo.iscompelete ? "Uncomplete" : "Complete"}
        </button>
        <button className={styles.btn} onClick={() => onDelete(todo.id)}>
          delete
        </button>
      </div>
    </section>
  );
};

export default TodoDetail;
