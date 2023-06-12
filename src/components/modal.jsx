import { useForm } from "react-hook-form";
import iconoCerrar from "../img/cerrar.svg"
import { useEffect } from "react";

const Modal = ({ setModel, addGastos, gastoEditable, editGasto }) => {
    const handleGasto = (data) => {
        if (gastoEditable) {
            data.id = gastoEditable.id
            data.fecha = gastoEditable.fecha
            editGasto(data)
        } else {
            data.fecha = Date.now()
            data.id = `${data.fecha}${data.nombreGasto}`
            addGastos(data)
        }
        setModel(false)
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm();

    useEffect(() => {
        if (gastoEditable) {
            setValue("nombreGasto", gastoEditable.nombreGasto)
            setValue("cantidad", gastoEditable.cantidad)
            setValue("categoria", gastoEditable.categoria)
        }
    }, [])
    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img onClick={() => setModel(false)} src={iconoCerrar} alt="iconoCerrar" />
            </div>
            <form className="formulario" onSubmit={handleSubmit(handleGasto)}>
                <legend>{gastoEditable ? "Editar Gasto" : "Nuevo Gasto"}</legend>
                <div className="campo">
                    <label htmlFor="">Nombre gasto</label>
                    <input placeholder="añade nombre gasto" type="text"
                        className="nuevo-presupuesto" {...register('nombreGasto', { required: true })} />
                    {errors.nombreGasto && <p className="alerta error">Nombre is required.</p>}
                </div>
                <div className="campo">
                    <label htmlFor="">Cantidad</label>
                    <input placeholder="añade cantidad" type="number"
                        className="nuevo-presupuesto" {...register("cantidad", { required: true })} />
                    {errors.cantidad && <p className="alerta error">Cantidad is required.</p>}
                </div>
                <div className="campo">
                    <label htmlFor="">Categoria</label>
                    <select id="categoria" {...register('categoria', { required: true })}>
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                    {errors.categoria && <p className="alerta error">Categoria is required.</p>}
                </div>
                <button type="submit">
                    {gastoEditable ? "Editar" : "Añadir"}
                </button>
            </form>
        </div>
    )
}
export default Modal;