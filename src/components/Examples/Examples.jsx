import TabButton from "../TabButton/TabButton";
import { TOPICS, EXAMPLES } from "../../data";
import { useState } from "react";
import Section from "../Section/Section";
import Tabs from "../Tabs/Tabs";
export default function Examples() {
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
    <Section title="Example" id="examples">
      <Tabs
        buttonsContainer="menu"
        tabContent={tabContent}
        buttons={
          <>
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
          </>
        }
      ></Tabs>
    </Section>
  );
}
