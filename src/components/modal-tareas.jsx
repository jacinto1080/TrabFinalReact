import { useForm } from "react-hook-form";
import iconoNuevoGasto from "../img/cerrar.svg"
import { useEffect } from "react";

const ModalTareas = ({ setModalTareas, addTarea, tareasEditable, editTarea}) => {
  const handleTarea = (data) => {
    if (tareasEditable){
      data.id = tareasEditable.id
      editTarea(data)
    }else{
      data.id = `${Date.now()}${data.tarea}` //con la funcion Date.now() creo un id 
      addTarea(data)
      }
      setModalTareas(false)
    }
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(()=>{
    if (tareasEditable){
    setValue("tarea", tareasEditable.tarea)
    setValue("categoria", tareasEditable.categoria)
    }
  },[])
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img onClick={() => setModalTareas(false)}
          src={iconoNuevoGasto} alt="icono cerrar" />
      </div>
      <form className="formulario" onSubmit={handleSubmit(handleTarea)}>
        <legend>Nueva Tarea</legend>
        <div className="campo">
          <label htmlFor="">Tarea</label>
          <textarea className="textarea" type="text" placeholder="inserte tarea"
            {...register('tarea', { required: true })} />
          {errors.tarea && <p className="alerta error">tarea is required.</p>}
        </div>
        <div className="campo">
          <label htmlFor="">Categoria</label>
          <select id="categoria" {...register('categoria', { required: true })}>
            <option value="">-- Seleccione --</option>
            <option value="hogar">Hogar</option>
            <option value="trabajo">Trabajo</option>
            <option value="estudios">Estudios</option>
            <option value="ocio">Ocio</option>
          </select>
          {errors.categoria && <p className="alerta error">Categoria is required.</p>}
        </div>
        <button type="submit">{tareasEditable?"Editar":"Añadir"}</button>
      </form>
    </div>
  )
}
export default ModalTareas;
