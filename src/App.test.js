import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe("mostrar elementos en la pantalla inicio", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  })
  test('renders titulo Planificador de gastos', () => {

    const linkElement = screen.getByText(/Planificador de gastos/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders boton añadir", () => {

    const botonAdd = screen.queryByRole("button", { name: /añadir/i })
    expect(botonAdd).toBeInTheDocument()
  })
  test("mensaje error al estar vacio el campo presupuesto", async () => {

    const botonAdd = screen.queryByRole("button", { name: /añadir/i })
    userEvent.click(botonAdd)
    const mensajeError = await screen.findByText(/Presupuesto is required./i)
    expect(mensajeError).toBeInTheDocument()
  })
})
describe("mostrar elementos en la pantalla Datos presupuesto", () => {
  beforeEach(async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const inputPresupuesto = screen.queryByRole("spinbutton")
    await waitFor(() => userEvent.type(inputPresupuesto, "500"))
    const botonAdd = screen.queryByRole("button", { name: /añadir/i })
    await waitFor(() => userEvent.click(botonAdd))

  })

  test("que se muestre el boton resetear presupuesto", async () => {
    const botonResetear = await screen.findByRole("button", { name: /resetear presupuesto/i })
    expect(botonResetear).toBeInTheDocument()
  })

  test("que se muestre imagen añadir nuevo gasto", async () => {
    const iconoGasto = await screen.findByTestId("nuevoGasto")
    expect(iconoGasto).toBeInTheDocument()
  })

  test("que se muestre importe presupuesto", async () => {
    const importePresupuesto = await screen.findByText("$500")
    expect(importePresupuesto).toBeInTheDocument()
  })
  test("que se muestre definir presupuesto", async () => {
    const botonResetear = await screen.findByRole("button", { name: /resetear presupuesto/i })
    await waitFor(() => userEvent.click(botonResetear))
    const definirPresupuesto = await screen.findByText(/definir presupuesto/i)
    expect(definirPresupuesto).toBeInTheDocument()
  })
})
describe("mostrar elementos en el modal de añadir nuevo gasto", () => {
  beforeEach(async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const inputPresupuesto = screen.queryByRole("spinbutton")
    await waitFor(() => userEvent.type(inputPresupuesto, "500"))
    const botonAdd = screen.queryByRole("button", { name: /añadir/i })
    await waitFor(() => userEvent.click(botonAdd))
    const iconoGasto = await screen.findByTestId("nuevoGasto")
    await waitFor(() => userEvent.click(iconoGasto))

  })
  test("que se muestre definir presupuesto", async () => {
    const nuevoGasto = await screen.findByText(/nuevo Gasto/i)
    expect(nuevoGasto).toBeInTheDocument()
  })
  test("que se muestre nombre requerido", async () => {
    const botonAdd = screen.queryByRole("button", { name: /añadir/i })
    await waitFor(() => userEvent.click(botonAdd))
    const nombreRequerido = await screen.findByText(/nombre is required./i)
    expect(nombreRequerido).toBeInTheDocument()

  })
  test("que se muestre cantidad requerida", async () => {
    const botonAdd = screen.queryByRole("button", { name: /añadir/i })
    await waitFor(() => userEvent.click(botonAdd))
    const cantidadRequerida = await screen.findByText(/cantidad is required./i)
    expect(cantidadRequerida).toBeInTheDocument()
  })


  
  test("cerrar el modal correctamente", async () => {
    const cerrarModal = await screen.findByAltText("iconoCerrar")
    await waitFor(() => userEvent.click(cerrarModal))
    expect(cerrarModal).not.toBeInTheDocument()
  })
})
describe("mostrar elementos en el modal de añadir nuevo gasto", () => {
  beforeEach(async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const inputPresupuesto = screen.queryByRole("spinbutton")
    await waitFor(() => userEvent.type(inputPresupuesto, "500"))
    const botonAdd = screen.queryByRole("button", { name: /añadir/i })
    await waitFor(() => userEvent.click(botonAdd))
    const iconoGasto = await screen.findByTestId("nuevoGasto")
    await waitFor(() => userEvent.click(iconoGasto))
    const inputnombreGasto = screen.getByPlaceholderText("añade nombre gasto")
    await waitFor(() => userEvent.type(inputnombreGasto, "viaje"))
    const inputcantidad = screen.getByPlaceholderText("añade cantidad")
    await waitFor(() => userEvent.type(inputcantidad, "250"))
    const inputCategoria = screen.getByRole("combobox")
    userEvent.selectOptions(inputCategoria, "ocio")
    const botonAddGastos = screen.queryByRole("button", { name: /añadir/i })
    await waitFor(() => userEvent.click(botonAddGastos))
  })
    test("que se muestre el boton eliminar del nuevo gasto", async ()=>{
      const botonEliminar = await screen.findByRole("button",{name:/eliminar/i})
      expect(botonEliminar).toBeInTheDocument()
    })
    // test("mostrar no hay gastos en categoria", async ()=>{
    //   const selecionarCategoria = await screen.findByRole("combobox")
    //   await waitFor(()=>userEvent.selectOptions(selecionarCategoria, "casa")) 
    //   const botonEliminar = await  screen.findByText(/no hay gastos/i)
    //   expect(botonEliminar).toBeInTheDocument()
    // })
})


