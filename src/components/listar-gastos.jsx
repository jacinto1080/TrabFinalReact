import { useForm } from "react-hook-form";
import iconoCerrar from "../img/cerrar.svg"
import Gastos from "./gastos";

const ListarGastos = ({ gastosFiltrados, eliminarGasto, viewEditarGasto }) => {
    return(
        <>
        {gastosFiltrados.map((gasto) => {
            return (
                <Gastos viewEditarGasto={viewEditarGasto} eliminarGasto={eliminarGasto}
                    key={gasto.id} gasto={gasto} />
            )
        })}
        </>
    )
}
export default ListarGastos