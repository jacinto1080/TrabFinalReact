import { useEffect, useState } from "react";
import NuevaTarea from "../components/Nueva-tarea";
import ModalTareas from "../components/modal-tareas";
import FiltrarTareas from "../components/filtrar-tareas";
import ListarTareas from "../components/listar-tareas";

const PagTareas = () => {
  const [tareas, setTareas] = useState([])
  const [tareasEditable, setTareasEditable] = useState(null)
  const [tareasFiltrados, setTareasFiltradas] = useState([])
  const [filtroTarea, setFiltroTarea] = useState(null)
  const [modalTareas, setModalTareas] = useState(false)

console.log(filtroTarea);

  useEffect(() => {
    if (filtroTarea) {
      const temporalTareas = tareas.filter((tarea) => {
        return (

          filtroTarea === tarea.categoria
        )
      })
      setTareasFiltradas(temporalTareas);
    } else {
      setTareasFiltradas(tareas)
    }
  }, [filtroTarea, tareas])

  const viewEditarTarea = (tarea)=>{
    setModalTareas(true)
    setTareasEditable(tarea)
  }
  const editTarea = (tareasEditable) => {
    const temporalTareas = tareas.map((tarea)=>{
      if (tareasEditable.id === tarea.id) {
        return tareasEditable
      }else {
        return tarea
      }
    })
    //Cambiamos el array de gastos por el nuevo
    setTareas(temporalTareas)
  }
  const eliminarTarea = (idTarea) => {
    const temporalTareas = tareas.filter((tarea) => {
      return (
        idTarea !== tarea.id
      )
    })
    setTareas(temporalTareas)
  }
  const addTarea = (newTarea) => {
    setTareas([...tareas, newTarea])
  }

  const  handleIconAddTarea = () => {
    setModalTareas(true)
    setTareasEditable(null)
  }
  return (
    <>
      <div className="header">
        <h1>Listado de Tareas</h1>
      </div>
      <div>
        <NuevaTarea handleIconAddTarea={handleIconAddTarea} />
      </div>
      {tareas.length === 0 && <div className="listado-gastos contenedor">
        <h2>No hay tareas pendientes</h2></div>}
      {tareas.length > 0 &&
        <div className="gastosMain">

          <FiltrarTareas setFiltroTarea={setFiltroTarea} />
          
          <div className="listado-gastos contenedor">
          {tareasFiltrados.length === 0 && 
          <h2>No existen tareas en esta categoria</h2>}
          {tareasFiltrados.length > 0 && <h2 >Tareas</h2>}

            <ListarTareas tareasFiltrados={tareasFiltrados} 
            viewEditarTarea={viewEditarTarea} 
            eliminarTarea={eliminarTarea} /> 
          </div>
        </div>
      }
      {modalTareas && <ModalTareas tareasEditable={tareasEditable} editTarea={editTarea}
      addTarea={addTarea} setModalTareas={setModalTareas} />}

    </>
  )
}
export default PagTareas;
