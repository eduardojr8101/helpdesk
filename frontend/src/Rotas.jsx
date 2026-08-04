import { Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Cadastro from './Cadastro.jsx';

function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
    );
}

export default Rotas;