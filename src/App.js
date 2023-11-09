import './App.css';
import Contador from './components/Contador';

function App() {
  return (
    <div className='App'>
      <Contador id="name" label="Nome:" placeholder="Digite algo..." />
    </div>
  );
}

export default App;
