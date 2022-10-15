import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'
import AnAvatar from './components/TheAvatar'
import ButtonBases from './components/ComplexButtons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Here is some content. <HelloWorld/>
        </p>
        <AnAvatar/>
        <ButtonBases/>
      </header>
    </div>
  );
}

export default App;
