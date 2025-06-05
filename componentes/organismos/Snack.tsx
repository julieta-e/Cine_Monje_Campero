// app/snack/page.jsx
"use client";
import React from "react";
import Comida from "../moleculas/Comida";

const Snack = () => {
  return (
    <section className="confiteria">
      <div className="confi-seccion">
        <img src="/piii.png" className="pipo-pipo" alt="" />

        <h2 className="title-confiteria">Confitería</h2>
        <img src="/piii.png" className="pipo-pipo" alt="" />
      </div>

      <Comida
        image="/comida.jpg"
        alt="Pipocas Grande"
        title="Pipocas Grande"
        description="Clásico acompañamiento para aquellos películas inolvidables"
        price={35}
      />
      <Comida
        image="/pi1.jpg"
        alt="Pipocas Grande Dobles"
        title="Pipocas Grande Dobles"
        description="Clásico acompañamiento para aquellas películas inolvidables."
        price={35}
      />
      <Comida
        image="/pi22.jpg"
        alt="Nachos con Queso"
        title="Nachos con Queso"
        description="Crujientes nachos bañados en delicioso queso fundido."
        price={40}
      />
      <Comida
        image="/pi3.jpg"
        alt="Refresco Grande"
        title="Refresco Grande"
        description="Bebida fría y refrescante para acompañar tu película favorita."
        price={20}
      />
      <Comida
        image="/pi4.jpg"
        alt="Chocolate"
        title="Chocolate"
        description="Dulce y cremoso chocolate para los amantes del cine y el sabor."
        price={30}
      />
      <Comida
        image="/pi5.jpg"
        alt="Galletas"
        title="Galletas"
        description="Crujientes galletas para disfrutar mientras ves tu película."
        price={25}
      />
    </section>
  );
};

export default Snack;
