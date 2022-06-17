import styles from "./todo.module.css";
const Todo = ({ todo, onCompelete }) => {
  return (
    <div className={styles.homeHolder}>
      <div
        key={todo.id}
        className={
          todo.iscompelete ? `${styles.compelete}` : `${styles.unCompelete}`
        }
        onClick={() => onCompelete(todo.id)}>
        <p className={styles.date}> {todo.date} </p>
        <h2> {todo.title} </h2>
        <p> {todo.describtion} </p>
      </div>
    </div>
  );
};

export default Todo;
