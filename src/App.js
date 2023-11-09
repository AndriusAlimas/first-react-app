import "./App.css";

import logoImg from "./assets/logo192.png";

import { CORE_CONCEPTS } from "./data";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcept({ title, image, text }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
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
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              text={CORE_CONCEPTS[0].description}
            />
            <CoreConcept
              image={CORE_CONCEPTS[1].image}
              title={CORE_CONCEPTS[1].title}
              text={CORE_CONCEPTS[1].description}
            />
            <CoreConcept
              image={CORE_CONCEPTS[2].image}
              title={CORE_CONCEPTS[2].title}
              text={CORE_CONCEPTS[2].description}
            />
            <CoreConcept
              image={CORE_CONCEPTS[3].image}
              title={CORE_CONCEPTS[3].title}
              text={CORE_CONCEPTS[3].description}
            />
          </ul>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
