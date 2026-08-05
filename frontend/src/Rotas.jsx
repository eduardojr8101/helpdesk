import { Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Cadastro from './Cadastro.jsx';
import Esqueceu from './Esqueceu.jsx';

function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/esqueceu" element={<Esqueceu />} />
        </Routes>
    );

}

export default Rotas;