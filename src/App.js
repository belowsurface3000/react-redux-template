import logo from './logo.svg';
import Component from "./Component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>React Template with Context</p>
        <img src={logo} className="App-logo" alt="logo" />
        <Component />
      </header>
    </div>
  );
}

export default App;
