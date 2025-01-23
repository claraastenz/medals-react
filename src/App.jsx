import Country from "./components/Country"; 
import "./App.css";

function App() {
  return (
    <div>
      <header className="app-header"></header>
      <div className="country-list">
        <Country />
      </div>
    </div>
  );
}

export default App;
