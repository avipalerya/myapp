import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./components/ComponentA";
import { ComponentB } from "./components/ComponentB";
import DataFromFFile from "./components/Data";
import ComponentC from "./components/ComponentC";

function App() {
  return (
    <div className="App">
      <h1>Hello React App</h1>
      <ComponentA />
      <ComponentB />
      <DataFromFFile />
      <ComponentC />
    </div>
  );
}

export default App;
