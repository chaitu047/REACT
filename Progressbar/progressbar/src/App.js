import Progressbar from "./components/Progressbar";
import React, { useEffect, useState } from "react";

function App() {

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          setProgress(prev + 1);
        }
        else {
          clearInterval(interval);
        }
      })
      return () => {
        if (interval) {
          clearInterval(interval);
        }
      }
    }, 1000);
  }, [])

  return (
    <div className="App">
      <Progressbar progress={progress} sx={{ width: '8rem' }} />
    </div>
  );
}

export default App;
