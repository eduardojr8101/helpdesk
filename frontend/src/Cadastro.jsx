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

  async function handleSubmit(event) {
    event.preventDefault();

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
    try {
      const resposta = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: nome,
          email: email,
          password: senha,
        }),
      });

      const texto = await resposta.text();
      let dados = null;

      try {
        dados = texto ? JSON.parse(texto) : null;
      } catch (parseError) {
        dados = null;
      }

      if (!resposta.ok) {
        const mensagemErro =
          dados?.errors
            ? Object.values(dados.errors).flat().join(' ')
            : dados?.message || texto || `Erro ${resposta.status}`;
        setErro(mensagemErro);
        return;
      }

      navigate('/');
    } catch (error) {
      setErro('Erro ao cadastrar usuário.');
    }
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