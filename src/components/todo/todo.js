import { Link } from "react-router-dom";
import styles from "./todo.module.css";
import {MdDone} from 'react-icons/md';
import { FiAlertCircle } from "react-icons/fi";
const Todo = ({ todo }) => {
  return (
    <Link
      className={styles.link}
      key={todo.id}
      to={`/todo/${todo.id}`}
      state={todo}>
      <div
        className={
          todo.iscompelete ? `${styles.compelete}` : `${styles.unCompelete}`
        }>
        <p className={styles.date}> {todo.date} </p>
        <h2> {todo.title} </h2>
        <p> {todo.describtion} </p>
        <p className={styles.condition}>{todo.iscompelete ? <MdDone/> : <FiAlertCircle/>}</p>
      </div>
    </Link>
  );
};

export default Todo;
