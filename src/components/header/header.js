import styles from "./header.module.css";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <header className={styles.header}>
      <h2> Todo List</h2>
      <div className={styles.search}>
        <FaSearch className={styles.searchIcon} />
        <input type='text' placeholder='Search todo' />
      </div>
    </header>
  );
};

export default Header;
