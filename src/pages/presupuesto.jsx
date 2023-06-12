import { useEffect, useState } from "react"
import DatosPresupuesto from "../components/datos-presupuesto"
import FiltrarGastos from "../components/filtrar-gastos"
import ListarGastos from "../components/listar-gastos"
import Modal from "../components/modal"
import NuevoGasto from "../components/nuevo-gasto"
import NuevoPresupuesto from "../components/nuevo-presupuesto"

const Presupuesto = () => {
    const [gastosFiltrados, setgastosFiltrados] = useState([])
    const [filtro, setFiltro] = useState("")
    const [modal, setModal] = useState(false)
    const [presupuesto, setPresupuesto] = useState(0)
    const [totalGastos, setTotalGastos] = useState(0)
    const [disponible, setDisponible] = useState(0)
    const [gastos, setgastos] = useState([])
    const [gastoEditable, setGastoEditable] = useState(null)

    useEffect(() => {
        if (filtro) {
            const newtemporalGastos = gastos.filter((gasto) => {
                return (
                    filtro === gasto.categoria
                )
            })
            setgastosFiltrados(newtemporalGastos)
        } else {
            setgastosFiltrados(gastos)
        }
    }, [filtro, gastos])

    useEffect(() => {
        let temporalGasto = 0
        gastosFiltrados.forEach(element => {
            temporalGasto = Number(element.cantidad) + temporalGasto
        })
        setTotalGastos(temporalGasto)
        setDisponible(presupuesto - temporalGasto)
    }, [gastosFiltrados])

    useEffect(() => {
        setDisponible(presupuesto)
    }, [presupuesto])

    const addGastos = (newGasto) => {
        setgastos([...gastos, newGasto])
    }
    const editGasto = (editGasto) => {    
        const temporalGastos = gastos.map((gasto) => {
            if (gasto.id === editGasto.id) {
                return editGasto;
            } else {
                return gasto;
            }
        })
        setgastos(temporalGastos)
    }
    const eliminarGasto = (idGasto) => {
        const temporalGastos = gastos.filter((gasto) => {
            return (
                gasto.id !== idGasto
            )
        })
        setgastos(temporalGastos)
    }
    const viewEditarGasto = (gasto) => {
        setModal(true)
        setGastoEditable(gasto)

    }
    const handleAdd = () => {
        setModal(true)
        setGastoEditable(null)
    }
    return (
        <>
            <div className="header">
                <h1>Planificador de gastos</h1>
                {presupuesto ?
                    <>
                        <DatosPresupuesto filtro={filtro} setGastos={setgastos} disponible={disponible}
                            totalGastos={totalGastos} setPresupuesto={setPresupuesto}
                            presupuesto={presupuesto} />
                        <NuevoGasto handleAdd={handleAdd} />
                    </>
                    :
                    <NuevoPresupuesto setPresupuesto={setPresupuesto} />
                }
            </div>
            {gastos.length > 0 &&
                <div className="gastosMain">
                    <FiltrarGastos setFiltro={setFiltro} />
                    <div className="listado-gastos contenedor">
                        {gastosFiltrados.length > 0 ?
                            <h2>Gastos</h2>
                            :
                            <h2>No hay gastos en esta categoria</h2>
                        }
                        <ListarGastos viewEditarGasto={viewEditarGasto} gastosFiltrados={gastosFiltrados}
                            eliminarGasto={eliminarGasto} />
                    </div>
                </div>
            }
            {modal && <Modal editGasto={editGasto} gastoEditable={gastoEditable} addGastos={addGastos} setModel={setModal} />}
        </>
    )
}
export default Presupuesto;