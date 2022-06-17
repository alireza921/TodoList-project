
import styles from "./home.module.css";
const Home = ({ todos, onCompeleteTodo }) => {
  console.log(todos);
  const compeleteTodoHandler = (id) => {
    onCompeleteTodo(id);
  };

  return (
    <div>
      home page
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={
            todo.iscompelete ? `${styles.compelete}` : `${styles.unCompelete}`
          }
          onClick={() => compeleteTodoHandler(todo.id)}>
          <p> {todo.date} </p>
          <h2> {todo.title} </h2>
          <p> {todo.describtion} </p>
        </div>
      ))}
      .
    </div>
  );
};

export default Home;
