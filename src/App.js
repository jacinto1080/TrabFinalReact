
import './App.css';
import { Routes, Route } from "react-router";
import Presupuesto from './pages/presupuesto';
import PagTareas from './pages/pagTareas';
import NavBar from './components/nav-bar';

function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Presupuesto />} />
        <Route path="/tareas" element={<PagTareas />} />
      </Routes>
    </>
  );
}
export default App;


