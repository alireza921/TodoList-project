import styles from './header.module.css'
const Header = () => {
    return (
        <header className={styles.header}> 
        <h2> Todo List</h2>
        <input type='text' /> 
    </header>
      );
}
 
export default Header;