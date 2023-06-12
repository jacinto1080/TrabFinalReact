

const FiltrarGastos = ({setFiltro}) => {
    return (
        <div className="filtros sombra contenedor">
            <div className="campo">
                <label htmlFor="">Filtrar gastos</label>
                <select id="categoria" onChange={(e)=>setFiltro(e.target.value)}> 
                    <option value="">-- Todos --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="varios">Gastos Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
            </div>
        </div>
    )
}
export default FiltrarGastos
