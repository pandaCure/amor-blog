import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="home">
      <header className="home-header">钟繇blog</header>
      <main>body1</main>
      <footer className="home-footer">
        <a href="https://beian.miit.gov.cn/" target="_blank">
          辽ICP备17009955号
        </a>
      </footer>
    </div>
  );
}

export default App;
