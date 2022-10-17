import './App.css';
import HelloWorld from './components/HelloWorld'
import AnAvatar from './components/TheAvatar'
import ButtonBases from './components/ComplexButtons'
import HomeIcon from './components/MyIcon'
import Mountain from './components/Mountain';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Here is some content. <HelloWorld/>
        </p>
        <AnAvatar/>
        <Mountain/>
        <HomeIcon/>
        <ButtonBases/>
      </header>
    </div>
  );
}

export default App;
