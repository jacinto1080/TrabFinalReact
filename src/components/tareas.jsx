import IconoAhorro from "../img/icono_ahorro.svg";
import IconoCasa from "../img/icono_casa.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoOcio from "../img/icono_ocio.svg";

const ListaIconos = {
    trabajo: IconoAhorro,
    hogar: IconoCasa,
    estudios: IconoGastos,
    ocio: IconoOcio,
};
const Tareas = ({tarea, eliminarTarea, viewEditarTarea}) => {
    const handleEliminar = ()=>{
        eliminarTarea(tarea.id)
       }

    const handleEditar = ()=>{
        viewEditarTarea(tarea)
       }
       
return(
    <div className="gasto sombra">
        <div className="contenido-gasto">
            <img src={ListaIconos[tarea.categoria]} alt="" />
            <div className="descripcion-gasto">
                <p className="categoria">{tarea.categoria}</p>
                <p className="nombre-gasto">{tarea.tarea}</p>
            </div>
        </div>
        <div className="descripcion-gasto">
            <p>
                <button onClick={handleEliminar} className="delete-edit-button">
                    Eliminar
                </button>
            </p>
            <p>
                <button onClick={handleEditar} className="delete-edit-button">
                    Editar
                </button>
            </p>
        </div>
    </div>
)}
export default Tareas;
