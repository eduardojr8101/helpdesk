import { useNavigate } from 'react-router-dom';
import './App.css';

function Home() {
  const navigate = useNavigate();
  const name = localStorage.getItem('userEmail') || 'usuário';

  function handleLogout() {
    localStorage.removeItem('auth');
    localStorage.removeItem('userEmail');
    navigate('/');
  }

  return (
    <div className='app home'>
      <h1>Bem-vindo, {name}</h1>
      <p>Você é argus!</p>
      <button type='button' onClick={handleLogout} className='botao'>
        Logout
      </button>
    </div>
  );
}

export default Home;
