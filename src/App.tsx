import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Component from "./Component.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Component text={"Hello click me"} />
    </>
  );
}

export default App;
