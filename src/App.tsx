import { useState } from "react";
import logo from "./logo.svg";
import styles from "./app.module.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="home">
      <header className={styles.header}>钟繇blog</header>
      <main className={styles.body}>body1</main>
      <footer className={styles.footer}>
        <a href="https://beian.miit.gov.cn/" target="_blank">
          辽ICP备17009955号
        </a>
      </footer>
    </div>
  );
}

export default App;
