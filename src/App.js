import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';
import React from 'react';
import api from './servicos/api';

function App() {

  const [input, setInput] = useState('')

  async function handleSearch(){

  if(input === ''){
    alert("Por favor, insira um CEP")
    return;
  }

  try{
    const reponse = await
  }catch{

  }

  }

  return (
    <div className="container">
      <h1 className="titulo">Buscador de CEP</h1>

      <div className="containerInput">
        <input
        type="text"
        placeholder="Insira um CEP"
        value={input}
        onChange={(evento) => setInput(evento.target.value)}
        />

        <button className="botaopesquisar" onClick={handleSearch}>
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
