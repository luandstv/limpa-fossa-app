import { useState } from "react";
import "./index.css";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button variant="ghost">Click me</Button>
      </div>
    </>
  );
}

export default App;
