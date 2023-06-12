import { render, screen } from "@testing-library/react"
import ListarGastos from "../listar-gastos"

const gastosFiltrados = [
    {
        "nombreGasto": "Ahorro",
        "cantidad": "123",
        "categoria": "ahorro",
        "fecha": 1680122437727,
        "id": "1680122437727Ahorro"
    },
    {
        "nombreGasto": "Netflix",
        "cantidad": "123",
        "categoria": "suscripciones",
        "fecha": 1680122445340,
        "id": "1680122445340Netflix"
    },
    {
        "nombreGasto": "Luz",
        "cantidad": "123",
        "categoria": "casa",
        "fecha": 1680122451313,
        "id": "1680122451313Luz"
}
]

// describe("mostrar un listado de gastos", ()=>{
//     beforeEach(()=>{
//         render(<ListarGastos gastosFiltrados={gastosFiltrados}/>)
//     })
//     test("comprobar que se muestran 3 gastos", async()=>{
//         const cantidadText = await screen.findAllByText("123")
//         expect(cantidadText).toHaveLength(3)
//     })
// })