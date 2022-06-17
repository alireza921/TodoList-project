import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

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
    <form onSubmit={submitHandler}>
      <div>
        <label> Date </label>
        <input
          name='date'
          value={newTodo.date}
          type='date'
          onChange={changeHandler}
        />
      </div>
      <div>
        <label> Title</label>
        <input
          type='text'
          name='title'
          value={newTodo.title}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label> describtion </label>
        <textarea
          type='text'
          name='describtion'
          value={newTodo.describtion}
          onChange={changeHandler}
        />
      </div>
      {/* <Link to='/' state={newTodo}> */}
      <button type='submit'>create todo</button>
      {/* </Link> */}
    </form>
  );
};

export default NewTodo;
