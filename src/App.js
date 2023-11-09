import './App.css';
import Contador from './components/Contador';
import Login from './components/Login';

function App() {
  return (
    <div className='App'>
      <Contador id="name" label="Nome:" placeholder="Digite algo..." />
      <hr/>
      <Login/>
    </div>
  );
}

export default App;
