import Login from "@/componentes/organismos/Login";
import Link from "next/link";

export default function Home() {
  return (
    <div className="inicio-otro">
      <div className="dentro">
        <img className="monje-carp" src="/monje.png" alt="Monje" />

        <div className="buttons-container">
          <Link href="../sesion">
            <button className="botones">INICIAR SESION</button>
          </Link>

          <div className="separator">
            <span className="linea"></span>
            <span className="or-text">or</span>
            <span className="linea"></span>
          </div>

          <Link href="../registro">
            <button className="botones">REGISTRARSE</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
