import Image from "next/image";
import { CardShared } from "../Components/shared/Card/cardShared";
import Portfolio from "../Components/shared/portafolio"
import { ButtonUI } from "../Components/ui/button/button";
import { CardComponent } from "../Components/ui/Card";
export default function Home() {
  return (
    <>
  {/* <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-4xl font-bold text-center">
        🌗 Modo Oscuro con Next.js 16 + Tailwind 4
      </h1>
      <p className="text-lg text-center max-w-md">
        Cambia entre modo claro y oscuro. El tema se guarda y sigue el modo del sistema.
      </p>
      <ButtonUI />
      <CardShared />
    </main> */}
    <Portfolio/>
    </>
  );
}
