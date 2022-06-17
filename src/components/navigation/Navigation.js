import { Link } from "react-router-dom";
import styles from './navigation.module.css'
import { FaHome } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { MdDone } from "react-icons/md";
import { RiChatHistoryLine } from "react-icons/ri";

const Navigation = () => {
  const pages = [
    { to: "/", name: <FaHome/> },
    { to: "/newtodo", name: <IoIosCreate/> },
    { to: "/compelete", name: <MdDone /> },
    { to: "/uncompelete", name: <RiChatHistoryLine/> },
    // { to: "/todolist", name: "TodoList" },

    // FcProcess  - AiOutlineCheckCircle   - IoIosCheckmarkCircleOutline - RiChatHistoryLine
  ];

  return (
    <ul className={styles.navigation}>
      {pages.map((page) => (
        <li key={page.name}>
          <Link to={page.to}> {page.name} </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
