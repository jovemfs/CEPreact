import { FiSearch } from 'react-icons/fi';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
        <input
        type="text"
        placeholder="Insira um CEP"
        />

        <button className="buttonSearch">
           <FiSearch size={25} color="white"/>
        </button>
      </div>

      <main className='main'>
        <h2>CEP: 01825-173</h2>

        <span>Rua para teste</span>
        <span>Completo: complemento para teste</span>
      </main>

    </div>
  );
}

export default App;
