
import { Metadata, ResolvingMetadata } from 'next'

import { PageContent } from "../page-content";
import { CountryLabels, locales } from "../const";
type Props = {
  params: { country: CountryLabels }
  searchParams: { [key: string]: string | string[] | undefined }
}
// export const dynamicParams = false
export async function generateStaticParams() {
 
  return locales.map((item) => ({
    country: item.label,
  }))
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  
  const label = params.country || locales?.[0]?.label
  // google search old link with lowercase, eg: hk
  const localeName = locales?.filter(locale => locale?.label?.toLocaleLowerCase?.() === label?.toLocaleLowerCase?.())?.[0]?.localeName
  return {
    title: `${localeName} Phone Number Generator | Quick & Reliable for Testing`,
    description: `Effortlessly generate phone numbers for testing purposes in 
    ${localeName} with our versatile tool. Access a wide range of numbers for comprehensive testing`,

  }
}
export default function CountryPage({params}: {params: {country: CountryLabels}}) {
  console.log(`CountryPage.....params....`, params, )
  return (
    <PageContent country={params?.country}  />
  );
}
