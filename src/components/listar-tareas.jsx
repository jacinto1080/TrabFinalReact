import Tareas from "./tareas";

const ListarTareas = ({viewEditarTarea, eliminarTarea, tareasFiltrados}) => {
  return (
    <div>
      {tareasFiltrados.map((tarea) => {
              return (
                <Tareas key={tarea.id} viewEditarTarea={viewEditarTarea} eliminarTarea={eliminarTarea} tarea={tarea} />
              )
            })
            }
    </div>
  )
}
export default ListarTareas;
