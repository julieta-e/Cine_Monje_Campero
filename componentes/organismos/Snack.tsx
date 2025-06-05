import React from "react";

const Snack = () => {
  return (
    <section className="confiteria">
      <h2 className="title-confiteria"> Confitería</h2>
      <div className="snack">
        <img src="comida.jpg" alt="Pipocas Grande" className="snack-image" />
        <div className="snack-info">
          <h3 className="pipocas pi">Pipocas Grande</h3>
          <p className="pipocas">
            Clásico acompañamiento para aquellos películas inolvidables
          </p>
          <p className="price">35 Bs</p>
          <div className="quantity-control">
            <button aria-label="Disminuir cantidad">−</button>
            <span>0</span>
            <button aria-label="Aumentar cantidad">+</button>
          </div>
        </div>
      </div>
      <div className="snack">
        <img src="pi1.jpg" alt="Pipocas Grande" className="snack-image" />
        <div className="snack-info">
          <h3 className="pipocas pi">Pipocas Grande Dobles</h3>
          <p className="pipocas">
            Clásico acompañamiento para aquellas películas inolvidables.
          </p>
          <p className="price">35 Bs</p>
          <div className="quantity-control">
            <button aria-label="Disminuir cantidad">−</button>
            <span>0</span>
            <button aria-label="Aumentar cantidad">+</button>
          </div>
        </div>
      </div>

      <div className="snack">
        <img src="pi22.jpg" alt="Nachos con Queso" className="snack-image" />
        <div className="snack-info">
          <h3 className="pipocas pi">Nachos con Queso</h3>
          <p className="pipocas">
            Crujientes nachos bañados en delicioso queso fundido.
          </p>
          <p className="price">40 Bs</p>
          <div className="quantity-control">
            <button aria-label="Disminuir cantidad">−</button>
            <span>0</span>
            <button aria-label="Aumentar cantidad">+</button>
          </div>
        </div>
      </div>

      <div className="snack">
        <img src="pi3.jpg" alt="Refresco Grande" className="snack-image" />
        <div className="snack-info">
          <h3 className="pipocas pi">Refresco Grande</h3>
          <p className="pipocas">
            Bebida fría y refrescante para acompañar tu película favorita.
          </p>
          <p className="price">20 Bs</p>
          <div className="quantity-control">
            <button aria-label="Disminuir cantidad">−</button>
            <span>0</span>
            <button aria-label="Aumentar cantidad">+</button>
          </div>
        </div>
      </div>

      <div className="snack">
        <img src="pi4.jpg" alt="Chocolate" className="snack-image" />
        <div className="snack-info">
          <h3 className="pipocas pi">Chocolate</h3>
          <p className="pipocas">
            Dulce y cremoso chocolate para los amantes del cine y el sabor.
          </p>
          <p className="price">30 Bs</p>
          <div className="quantity-control">
            <button aria-label="Disminuir cantidad">−</button>
            <span>0</span>
            <button aria-label="Aumentar cantidad">+</button>
          </div>
        </div>
      </div>

      <div className="snack">
        <img src="pi5.jpg" alt="Galletas" className="snack-image" />
        <div className="snack-info">
          <h3 className="pipocas pi">Galletas</h3>
          <p className="pipocas">
            Crujientes galletas para disfrutar mientras ves tu película.
          </p>
          <p className="price">25 Bs</p>
          <div className="quantity-control">
            <button aria-label="Disminuir cantidad">−</button>
            <span>0</span>
            <button aria-label="Aumentar cantidad">+</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Snack;
