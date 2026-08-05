import{useState} from 'react'
import './App.css'


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[erro, setErro] = useState('')

  function handleSubimit(event){
    event.preventDefault();

    if(email=== '' && password === ''){
      setErro("Preencha os campos E-mail e Senha!")
      return;
    } 
    if(email === ''){
        setErro("Preencha o campo E-mail!");
        return;
    }  
    if (password === ''){
      setErro("Preencha o campo Senha!");
      return;
    }

    setErro('');
  }
  

  return (
    <div className='app'>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubimit}>

        <div className='email'>
          <label htmlFor="email">E-mail:</label>
          <input id='email' type="email" placeholder='Digite seu E-mail:' value={email} onChange={(event) => setEmail(event.target.value)}/>
        </div>

        <div className='senha'>
          <label htmlFor="senha">Senha:</label>
          <input id="senha" autoComplete="off" type="password" placeholder='Digite sua senha' value={password} onChange={(event) => setPassword(event.target.value)}/>
        </div>

        <div className='botao'>
            {erro && <p className='mensagem-erro'>{erro}</p>}
            <button type='submit'>Entrar</button>
        </div>

       
          <div className='esqueceu'> 
            <p><a href="/Esqueceu">Esqueceu sua senha?</a></p>
          </div>

          <div className='lembre'>
            <label htmlFor="lembre">Lembrar-me</label>
            <input type="checkbox" />
          </div>

          <div className='cadastar'>
            <p className='cadastre'>Não tem uma conta? <a href="cadastro">Cadastre-se</a></p>
          </div>
       

      </form> 

    </div>
      
  )
}

export default App