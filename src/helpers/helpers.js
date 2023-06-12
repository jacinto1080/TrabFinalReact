export const formatearFecha = (fecha)=>{
    let newfecha = new Date(fecha);
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    
    return(
      newfecha.toLocaleDateString("es-ES", options)
    );
}