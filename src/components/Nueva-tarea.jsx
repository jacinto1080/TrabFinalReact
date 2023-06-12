 import iconoNuevoGasto from "../img/nuevo-gasto.svg"

 const NuevaTarea = ({handleIconAddTarea}) => {
   return (
     <div className="nuevo-gasto"><img onClick={handleIconAddTarea} 
     src={iconoNuevoGasto} alt="icono nueva tarea"/>
     
     </div>
   )
 }
 export default NuevaTarea
 