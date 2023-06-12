import { Link } from "react-router-dom"
import "./nav-bar.css"

const NavBar = () => {
  return (
    <>
      <div className="nav-links-container">
        <Link className="nav-link" to="/">
          Presupuesto
        </Link>
        <Link className="nav-link" to="/tareas">
          Listado Tareas
        </Link>
      </div>
    </>
  )
}
export default NavBar
