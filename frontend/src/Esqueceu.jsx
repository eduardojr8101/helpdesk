import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

function Esqueceu() {
 
  function handleSubmit(event) {
    event.preventDefault();

  }

  return (
       <div className='app esqueceu'>
            <h1>RECUPERAR SENHA</h1>
            <label htmlFor="recuperar">E-mail:</label>
            <input id="recuperar" type="email" placeholder="Digite seu e-mail" />
            <button type="submit">Recuperar</button>
            <Link to="/">Voltar</Link>
        </div>
  );    
}


export default Esqueceu;