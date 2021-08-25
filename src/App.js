import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>🔎 Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a href="https://github.com/celonen">Cassandra Elonen</a> and is
            open-sourced on GitHub
          </small>
        </footer>
      </div>
    </div>
  );
}
