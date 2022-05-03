import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';
import React from 'react';
import api from './servicos/api';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch(){

  if(input === ''){
    alert("Por favor, insira um CEP")
    return;
  }

  try{
    const response = await api.get(`${input}/json`);
    setCep(response.data)
    setInput("");
  }catch{
    alert("Nosso buscador nao encontrou este CEP! Sentimos muito :(");
    setInput("")
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

      {Object.keys(cep).length > 0 && (
        <main className='principal'>
          <h2>CEP: {cep.cep}</h2>
      
          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
      
        </main>
      )}

    </div>
  );
}

export default App;
