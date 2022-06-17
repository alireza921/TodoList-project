import Navigation from "../components/navigation/Navigation";
import Header from "../components/header/header";
import styles from "./layout.module.css";
const LayOut = ({ children }) => {
  return (
    <section className={styles.holder}>
      <Header />
      <main className={styles.main}>
        <Navigation />
        <article className={styles.pages}>{children}</article>
      </main>
    </section>
  );
};

export default LayOut;
