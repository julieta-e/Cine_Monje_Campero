import Entrada from "@/componentes/organismos/Entrada";
import Link from "next/link";

export default function Home() {
  return (
    <Link href="/inicio/">
      <Entrada />
    </Link>
  );
}
