import "./App.css";
import logoImg from "./assets/logo192.png";
import componentsImage from "./assets/components.png";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcept({ title, image, text }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>${title}</h3>
      <p>{text}</p>
    </li>
  );
}

function Header() {
  const description =
    reactDescriptions[genRandomInt(reactDescriptions.length - 1)];
  return (
    <header className="App-header">
      <img src={logoImg} alt="Stylized atom" className="App-logo" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              image={componentsImage}
              title="React"
              text="This is my text"
            />
            <CoreConcept />
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
