import styles from "./home.module.css";
import { MdDone } from "react-icons/md";
import { RiChatHistoryLine } from "react-icons/ri";
import Todo from "../../components/todo/todo";

const Home = ({ todos, onCompeleteTodo }) => {
  console.log(todos);
  const compeleteTodoHandler = (id) => {
    onCompeleteTodo(id);
  };

  return (
    <div>
      <h2> Home page </h2>
      <div className={styles.total}>
        <h3> all todo : {todos.length} </h3>
        <h3>
          <RiChatHistoryLine className={styles.icon} />
          <span> Remaining Todos</span>:
          {todos.filter((p) => !p.iscompelete).length}
        </h3>
        <h3>
          <MdDone className={styles.icon} />
          <span> complete Todos</span>:
          {todos.filter((p) => p.iscompelete).length}
        </h3>
      </div>

      <div className={styles.homeHolder}>
        {todos.map((todo) => (
          <Todo todo={todo} onCompelete={compeleteTodoHandler} />
        ))}
      </div>
    </div>
  );
};

export default Home;
