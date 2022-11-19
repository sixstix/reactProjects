import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>This React logo is cool!</h1>
        <p>
         React is so cool!
        </p>
        <p>
          <ul>
            <li>Not sure if you knew...</li>
            <li>But React is cool.</li>
            <li>Seriously, React is sooo KEWL!</li>
          </ul>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
