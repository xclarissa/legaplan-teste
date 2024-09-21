import { Header } from "@/components/Header";
import { MainContainer } from "@/components/Main";

export default function Home() {
  return (
    <main>
      <Header user="Clarissa" />
      <MainContainer task="Beber água"/>
    </main>
  );
}
