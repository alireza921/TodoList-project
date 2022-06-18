import styles from "./home.module.css";
import { MdDone } from "react-icons/md";
import { RiChatHistoryLine } from "react-icons/ri";
import Todo from "../../components/todo/todo";

const Home = ({ todos, onCompeleteTodo, onDelete }) => {
  console.log(todos);
  const compeleteTodoHandler = (id) => {
    onCompeleteTodo(id);
  };

  return (
    <section>
      <h2> Home page </h2>
      <header className={styles.total}>
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
      </header>

      <main className={styles.homeHolder}>
        {todos.map((todo) => (
          <Todo
            todo={todo}
            onCompelete={compeleteTodoHandler}
            onDelete={onDelete}
          />
        ))}
      </main>
    </section>
  );
};

export default Home;
