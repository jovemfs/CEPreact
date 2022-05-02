import { FiSearch } from 'react-icons/fi';
import './style.css';

function App() {
  return (
    <div className="container">
      <h1 className="titulo">Buscador de CEP</h1>

      <div className="containerInput">
        <input
        type="text"
        placeholder="Insira um CEP"
        />

        <button className="botaopesquisar">
           <FiSearch size={25}/>
        </button>
      </div>

      <main className='principal'>
        <h2>CEP: 01825-173</h2>

        <span>Rua para teste</span>
        <span>Completo: complemento para teste</span>
        <span>Vila Romana</span>
        <span>Sao Paulo</span>

      </main>

    </div>
  );
}

export default App;
