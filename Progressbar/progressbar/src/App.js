import Progressbar from "./components/Progressbar";
import React, {useEffect, useState } from "react";

function App() {

   const [progress, setProgress] = useState(0);

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setProgress((prev)=>prev+1);
        }, 1000);

        return ()=>{
            clearInterval(intervalId);
        }
    })

  return (
    <div className="App">
      <Progressbar progress={progress}/>
    </div>
  );
}

export default App;
