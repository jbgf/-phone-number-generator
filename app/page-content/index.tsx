
import Link from "next/link"
import { CountryLabels, locales } from "../const"
import { EmojiCount } from "../emoji-count"
import { EmojiForm } from "../emoji-form"
import { UserGuide } from "../user-guide"

interface PageContentProps extends React.PropsWithChildren {
  country: CountryLabels
  isHome?: boolean
}

export const PageContent = (props: PageContentProps) => {
  const { children, country } = props;
  const countryName = locales.filter(item => item.label === country)?.[0]?.localeName || country?.replace('_phonenumber', '')
  return (
    <>
      <div className="py-[15vh] sm:py-[20vh] flex flex-col items-center justify-center">
        <h2 className="font-medium text-2xl md:text-4xl text-black mb-3 animate-in fade-in slide-in-from-bottom-3 duration-1000 ease-in-out">
          Generate a Phone Number{props.isHome ? `` : ` for ${countryName}`} with Just a Click!
        </h2>
        
        <h3 className="text-gray-500 mb-12 text-base animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">
           Easily Generate Fake and Random Phone Numbers for Testing Purposes
        </h3>

        <div className="max-w-md space-y-4 w-full animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">
          <EmojiForm country={country} />
        </div>
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 place-items-center pt-10">
          {locales?.filter(item => item.label !== country).map(item => {
            return <Link key={item.label} className="whitespace-nowrap hover:text-sky-500 underline" href={`/${item.label}`
            } title={`${item.localeName} phone number generator`}>{item.localeName}</Link>
          })}
        </section>
        <div className="pt-36"><UserGuide isHome={props.isHome} /></div>
      </div>

      {/* <Suspense>
        <EmojiGrid prompt={prompt} />
      </Suspense> */}
    </>
  )
}
