import "./App.css";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton/TabButton";

import { CORE_CONCEPTS } from "./data";

function App() {
  function handleClick(selectedButton) {
    console.log("Clicked: ", selectedButton);
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => handleClick("Components")}>
              Components
            </TabButton>
            <TabButton onClick={() => handleClick("JSX")}>JSX</TabButton>
            <TabButton onClick={() => handleClick("Props")}>Props</TabButton>
            <TabButton onClick={() => handleClick("State")}>State</TabButton>
          </menu>
          Dinamic Content
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
