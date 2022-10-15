import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'
import AnAvatar from './components/TheAvatar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Here is some content. <HelloWorld/>
        </p>
        <AnAvatar/>
      </header>
    </div>
  );
}

export default App;
