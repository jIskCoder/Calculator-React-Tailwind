import { useState } from "react";
import ButtonsContainer from "./components/ui/containers/ButtonsContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ButtonsContainer theme="purple"/>
    </>
  );
}

export default App;
