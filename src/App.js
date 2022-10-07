import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Here is some content. <HelloWorld/>
        </p>
      </header>
    </div>
  );
}

export default App;
