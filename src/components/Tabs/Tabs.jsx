export default function Tabs({ tabContent, buttons }) {
  return (
    <>
      <menu>{buttons}</menu>
      {tabContent}
    </>
  );
}
