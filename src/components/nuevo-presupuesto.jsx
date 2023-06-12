import { useForm } from "react-hook-form";

const NuevoPresupuesto = ({setPresupuesto}) => {
    const handlePresupuesto = (data)=>{
    setPresupuesto(data.nuevoPresupuesto)
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form className="formulario" onSubmit={handleSubmit(handlePresupuesto)}>
                <div className="campo">
                    <label htmlFor="">definir presupuesto</label>
                    <input type="number" className="nuevo-presupuesto" {...register('nuevoPresupuesto', { required: true })} />
                {errors.nuevoPresupuesto && <p className="alerta error">Presupuesto is required.</p>}
                </div>
                <button type="submit">Añadir</button> 
            </form>
        </div>
    )
}
export default NuevoPresupuesto;

