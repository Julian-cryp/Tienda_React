import React from "react";

const Tarjeta = ({titulo, descripcion}) => (
    <div style={{border:'2px solid #F888', padding:'10px', margin:'10px'}}>
     <h1>{titulo}</h1>
     <p>{descripcion}</p>
    </div>
);

const CargarTarjetas = () => {

    const data = [
        { id: 1, nombre: "Tarjeta Pro", info: "Esta es la primera" },
    { id: 2, nombre: "Tarjeta Premium", info: "Esta es la segunda" },
    { id: 3, nombre: "Tarjeta Basic", info: "Esta es la tercera" }
    ];

    return(
        <div>
            <h2>Bienvenido</h2>
            {data.map((item)=>(
           <Tarjeta
           key={item.id}
           titulo={item.nombre}
           descripcion={item.info}
           />
            ))}
        </div>
    )
}

export default CargarTarjetas;