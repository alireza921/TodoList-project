import { Link } from "react-router-dom";

const Navigation = () => {
  const pages = [
    { to: "/", name: "Home" },
    { to: "/newtodo", name: "Create Todo" },
    { to: "/compelete", name: "Compelete" },
    { to: "/uncompelete", name: "UnComplete" },
    { to: "/todolist", name: "TodoList" },

  ];

  return (
    <ul>
      {pages.map((page) => (
        <li key={page.name}>
          <Link to={page.to}> {page.name} </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
