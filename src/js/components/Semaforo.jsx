import React, { useState } from "react";

const Semaforo = () => {
  const [prender, setPrender] = useState("luz-verde");

  const cambiarColor = (color) => {
    setPrender(color);
  };

  return (
    <main>
      <div className="palo-caja"></div>
      
      <div className="luces-caja">
        <div
          className={`luz-roja ${prender === "luz-roja" ? "luz-encendida" : ""}`}
          onClick={() => cambiarColor("luz-roja")}
        ></div>
        
        <div
          className={`luz-amarilla ${prender === "luz-amarilla" ? "luz-encendida" : ""}`}
          onClick={() => cambiarColor("luz-amarilla")}
        ></div>
        
        <div
          className={`luz-verde ${prender === "luz-verde" ? "luz-encendida" : ""}`}
          onClick={() => cambiarColor("luz-verde")}
        ></div>
      </div>
    </main>
  );
};

export default Semaforo;