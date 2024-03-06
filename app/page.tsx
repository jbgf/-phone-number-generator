import Image from "next/image";
import { PageContent } from "./page-content";
import CountryPage from "./[country]/page";
import { CountryLabels } from "./const";

export default function Home() {
  return (
    <CountryPage params={{'country': CountryLabels.Usa}} />
  );
}
