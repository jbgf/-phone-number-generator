
import { EmojiCount } from "../emoji-count"
import { EmojiForm } from "../emoji-form"
import { UserGuide } from "../user-guide"

interface PageContentProps extends React.PropsWithChildren {
  prompt?: string
}

export const PageContent = ({ children, prompt }: PageContentProps) => {
  return (
    <>
      <div className="py-[15vh] sm:py-[20vh] flex flex-col items-center justify-center">
        <h1 className="font-medium text-2xl md:text-4xl text-black mb-3 animate-in fade-in slide-in-from-bottom-3 duration-1000 ease-in-out">
          phone number generator
        </h1>
        <h2 className="text-gray-500 mb-12 text-base animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">
          generate fake phone number for test
        </h2>

        <div className="max-w-md space-y-4 w-full animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">
          <EmojiForm initialPrompt={prompt} />
        </div>
        <div className="pt-36"><UserGuide /></div>
      </div>

      {/* <Suspense>
        <EmojiGrid prompt={prompt} />
      </Suspense> */}
    </>
  )
}
