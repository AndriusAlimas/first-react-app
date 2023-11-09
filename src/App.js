import "./App.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header className="App-header">
      <header>
        <h1>React Essentials</h1>
        <p>
          {reactDescriptions[genRandomInt(reactDescriptions.length - 1)]} React
          concepts you will need for almost any app you are going to build!
        </p>
      </header>
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
