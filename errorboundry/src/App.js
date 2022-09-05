import "./App.css";
import PersonList from "./componentss/PersonList";
import PersonDetails from "./componentss/PersonDetails";
import ErrorBoundry from "./errorboundry/ErrorBoundry";

function App() {
  return (
    <div className="App">
      <ErrorBoundry>
        <PersonDetails />
        <PersonList />
      </ErrorBoundry>
    </div>
  );
}

export default App;
