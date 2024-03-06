import Image from "next/image";
import { useEffect } from "react";
import { Metadata, ResolvingMetadata } from 'next'

import { PageContent } from "../page-content";
import { CountryLabels, locales } from "../const";
type Props = {
  params: { country: CountryLabels }
  searchParams: { [key: string]: string | string[] | undefined }
}
export const dynamicParams = false
export async function generateStaticParams() {
 
  return locales.map((item) => ({
    country: item.label,
  }))
}
/* export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  
  // read route params
  const duration = params.country || `5`
 
  return {
    title: `${duration} Minute Timer - Boost Your Productivity`,
    description: `Discover efficient ways to use a ${duration} minute timer for boosting productivity 
    and focus. From Pomodoro techniques to quick breaks and meditation, 
    learn how to incorporate short intervals into your daily routine for improved efficiency.`,

  }
} */

export default function CountryPage({params}: {params: {country: CountryLabels}}) {
  console.log(params, `.....params....`)
  return (
    <PageContent country={params?.country} />
  );
}
