import iconoNuevoGasto from "../img/nuevo-gasto.svg"

const NuevoGasto = ({handleAdd})=> {
    return(
<div className="nuevo-gasto">
    <img onClick={handleAdd} data-testid="nuevoGasto" 
    src={iconoNuevoGasto} alt="icono-nuevoGasto"/></div>
    )
}
export default NuevoGasto;