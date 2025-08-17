import Progressbar from "./components/Progressbar";
import React, { useEffect, useState } from "react";

function App() {

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress >= 100) {
      return;
    }
    const intervalId = setInterval(() => {
      setProgress((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, [progress])

  return (
    <div className="App">
      <Progressbar progress={progress} sx={{ width: '8rem' }} />
    </div>
  );
}

export default App;
