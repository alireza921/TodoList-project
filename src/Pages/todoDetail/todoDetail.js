import { useLocation, useParams } from "react-router-dom";
import Todo from "../../components/todo/todo";

const TodoDetail = () => {
  const location = useLocation();
  console.log(location);
  const todo = location.state;
  console.log(todo);
  return (
    <div>
      <Todo todo={todo} />
    </div>
  );
};

export default TodoDetail;
