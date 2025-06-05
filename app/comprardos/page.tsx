"use client";

import Snack from "@/componentes/organismos/Snack";
import Link from "next/link";
import React, { useState } from "react";
    
const Page = () => {
  const [mostrarResumen, setMostrarResumen] = useState(false);

  const resumenEntradas = [
    { cantidad: 2, precioUnitario: 50 },
    { cantidad: 2, precioUnitario: 50 },
    { cantidad: 2, precioUnitario: 50 },
  ];

  const total = resumenEntradas.reduce(
    (acc, entrada) => acc + entrada.cantidad * entrada.precioUnitario,
    0
  );

  return (
    <div className="confi p-8 flex flex-col items-center relative min-h-screen">
      <Snack />

      <button
        className="btn-conti mt-8"
        onClick={() => setMostrarResumen(true)}
      >
        Continuar
      </button>

      {mostrarResumen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">¡Resumen de tu compra!</h2>
            {resumenEntradas.map((entrada, index) => (
              <p key={index} className="modal-linea">
                {entrada.cantidad}x entradas {entrada.precioUnitario}Bs
              </p>
            ))}
            <p className="modal-total">Total: {total}Bs</p>
            <Link href="/pago">
              <button className="btn-pagar">Ir a pagar</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
