import { useState } from "react";
import MainContainer from "./components/ui/containers/MainContainer";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider>
        <MainContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
