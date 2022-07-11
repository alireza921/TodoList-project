import styles from "./header.module.css";
import { FaSearch } from "react-icons/fa";
import { useTodo, useTodoAction } from "../../context/contextProvider";
import { useEffect, useState } from "react";
import { searchTodos } from "../../utils/filterFunction";
const Header = () => {
  const [search, setSearch] = useState("");
  const todos = useTodo();
  const changeHandler = (e) => {
    setSearch(e.target.value);
    searchTodos( e.target.value  , todos );
  };

  return (
    <header className={styles.header}>
      <h2> Todo List</h2>
      <div className={styles.search}>
        <FaSearch className={styles.searchIcon} />
        <input type='text' placeholder='Search todo' onChange={changeHandler} />
      </div>
    </header>
  );
};

export default Header;
