import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

function Cadastro() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (!nome && !email && !senha && !confirmarSenha) {
      setErro('Preencha todos os campos!');
      return;
    }

    if (!nome) {
      setErro('Preencha o campo Nome!');
      return;
    }

    if (!email) {
      setErro('Preencha o campo E-mail!');
      return;
    }

    if (!senha) {
      setErro('Preencha o campo Senha!');
      return;
    }

    if (!confirmarSenha) {
      setErro('Preencha o campo Confirmar Senha!');
      return;
    }

    if (senha !== confirmarSenha) {
      setErro('As senhas não conferem!');
      return;
    }

    setErro('');
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }

  return (
    <div className='app cadastro'>
      <h1>CADASTRO</h1>
      <form onSubmit={handleSubmit}>
        <div className='email'>
          <label htmlFor='nome'>Nome:</label>
          <input id='nome' type='text' placeholder='Digite seu nome' value={nome} onChange={(event) => setNome(event.target.value)} />
        </div>

        <div className='email'>
          <label htmlFor='email'>E-mail:</label>
          <input id='email' type='email' placeholder='Digite seu E-mail' value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>

        <div className='senha'>
          <label htmlFor='senha'>Senha:</label>
          <input id='senha' type='password' placeholder='Digite sua senha' value={senha} onChange={(event) => setSenha(event.target.value)} />
        </div>

        <div className='senha'>
          <label htmlFor='confirmarSenha'>Confirmar senha:</label>
          <input id='confirmarSenha' type='password' placeholder='Confirme sua senha' value={confirmarSenha} onChange={(event) => setConfirmarSenha(event.target.value)} />
        </div>

        <div className='botao'>
          {erro && <p className='mensagem-erro'>{erro}</p>}
          <button type='submit'>Cadastrar</button>
        </div>

        <div className='opcoes'>
          <p className='cadastre'>
            Já tem uma conta? <Link to='/'>Entrar</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;