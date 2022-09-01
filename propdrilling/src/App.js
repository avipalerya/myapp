import { useState } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";

function App(props) {
  let userName = "Avi";
  let [data, setData] = useState("megha");
  return (
    <div className="App">
      <h1>{user}</h1>
      <ComponentA userName={userName} setData={setData} />
    </div>
  );
}

export default App;
