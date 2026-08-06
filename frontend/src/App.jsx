import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');

  async function handleSubimit(event) {
    event.preventDefault();

    if (email === '' && password === '') {
      setErro("Preencha os campos E-mail e Senha!")
      return;
    }
    if (email === '') {
      setErro("Preencha o campo E-mail!");
      return;
    }
    if (password === '') {
      setErro("Preencha o campo Senha!");
      return;
    }

    setErro('');
    try {
      const resposta = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
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
            ? Object.values(dados.errors).join(' ')
            : dados?.message || texto || `Erro ${resposta.status}`;
        setErro(mensagemErro);
        return;
      }


      localStorage.setItem('auth', 'true');
      localStorage.setItem('userEmail', email);
      navigate('/home');
    } catch (error) {
      setErro('Erro ao realizar o login!');
    }
  }


  return (
    <div className='app'>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubimit}>

        <div className='email'>
          <label htmlFor="email">E-mail:</label>
          <input id='email' type="email" placeholder='Digite seu E-mail:' value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>

        <div className='senha'>
          <label htmlFor="senha">Senha:</label>
          <input id="senha" autoComplete="off" type="password" placeholder='Digite sua senha' value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>

        <div className='botao'>
          {erro && <p className='mensagem-erro'>{erro}</p>}
          <button type='submit'>Entrar</button>
        </div>


        <div className='esqueceu'>
          <p><Link to="/esqueceu">Esqueceu sua senha?</Link></p>
        </div>

        <div className='lembre'>
          <label htmlFor="lembre">Lembrar-me</label>
          <input type="checkbox" />
        </div>

        <div className='cadastar'>
          <p className='cadastre'>Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link></p>
        </div>


      </form>

    </div>

  )
}

export default App