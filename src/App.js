import logo from "./logo.svg";
import "./App.css";

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>React Essentials</h1>
      <p>
        React is a popular JavaScript library for building user interfaces,
        particularly single-page applications where you need a fast interaction
        with the user. .
      </p>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
