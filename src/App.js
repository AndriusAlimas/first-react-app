import "./App.css";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton/TabButton";
import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES, TOPICS } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
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
            <TabButton
              isSelected={selectedTopic === TOPICS.COMPONENTS}
              onClick={() => handleClick(TOPICS.COMPONENTS)}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === TOPICS.JSX}
              onClick={() => handleClick(TOPICS.JSX)}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === TOPICS.PROPS}
              onClick={() => handleClick(TOPICS.PROPS)}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === TOPICS.STATE}
              onClick={() => handleClick(TOPICS.STATE)}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
