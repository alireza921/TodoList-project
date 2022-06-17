import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import styles from "./newtodo.module.css";
const NewTodo = ({ onAddTodo }) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const [newTodo, setNewTodo] = useState({
    title: "",
    date: "",
    describtion: "",
  });

  const changeHandler = (e) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
    console.log(newTodo);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    onAddTodo(newTodo);
    navigate("/");
  };

  return (
    <form onSubmit={submitHandler} className={styles.newTodoForm}>
      <div className={styles.inputContainer}>
        <label> Date </label>
        <input className={styles.input}
          name='date'
          value={newTodo.date}
          type='date'
          onChange={changeHandler}
        />
      </div>
      <div className={styles.inputContainer}>
        <label> Title</label>
        <input className={styles.input}
          type='text'
          name='title'
          value={newTodo.title}
          onChange={changeHandler}
        />
      </div>
      <div className={styles.inputContainer}>
        <label> describtion </label>
        <textarea className={styles.input}
          type='text'
          name='describtion'
          value={newTodo.describtion}
          onChange={changeHandler}
        />
      </div>
      {/* <Link to='/' state={newTodo}> */}
      <button type='submit' className={styles.btn} >create todo</button>
      {/* </Link> */}
    </form>
  );
};

export default NewTodo;
