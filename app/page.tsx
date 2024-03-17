import Image from "next/image";
import { CountryLabels } from "./const";
import { PageContent } from "./page-content";

export default function Home() {
  return (
    <PageContent isHome country={CountryLabels.Usa} />
  );
}
