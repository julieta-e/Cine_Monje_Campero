import React from "react";

const Footer = () => {
  return (
    <footer className="pie-pagina">
      <div className="sociales">
        <div className="redes-sociales">
          <a href="#">
            <img className="icono-red" src="/facebook.png" alt="Facebook" />
            <p>Facebook</p>
          </a>
          <a href="#">
            <img className="icono-red" src="/tiktok.png" alt="TikTok" />
            <p>TikTok</p>
          </a>
          <a href="#">
            <img className="icono-red" src="/instagram.png" alt="Instagram" />
            <p>Instagram</p>
          </a>
        </div>
      </div>

      <div className="creditos">
        <p className="negro">Monje Campero ©</p>
      </div>
    </footer>
  );
};

export default Footer;
