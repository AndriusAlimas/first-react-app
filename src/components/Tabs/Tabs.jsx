export default function Tabs({
  tabContent,
  buttons,
  ButtonsContainer = "menu",
}) {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {tabContent}
    </>
  );
}
