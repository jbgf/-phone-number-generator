
import { Metadata, ResolvingMetadata } from 'next'

import { PageContent } from "../page-content";
import { CountryLabels, GenerateStyles, locales } from "../const";
import { generateDescription, generateTitle } from '@/util';
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
  const localeName = locales?.filter(locale => (locale?.label?.toLocaleLowerCase?.() === label?.toLocaleLowerCase?.()
    || (locale?.label?.toLocaleLowerCase?.()?.indexOf(label?.toLocaleLowerCase?.()) > -1)))?.[0]?.localeName
  return {
    title: generateTitle(localeName),
    description: generateDescription(localeName)

  }
}
export default function CountryPage({ params, searchParams }: {
  searchParams: { style: GenerateStyles | undefined },
  params: { country: CountryLabels }
}) {
  // console.log(`CountryPage.....params....`, params, )
  return (
    <PageContent country={params?.country} style={searchParams?.style} />
  );
}
