import { Suspense } from "react"

interface CountDisplayProps {
  count?: number
}

function CountDisplay({ count }: CountDisplayProps) {
  return (
    <h2 className="text-gray-500 mb-12 text-base animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">
    generate fake phone number for test
  </h2>
  )
}

async function AsyncEmojiCount() {
  const count = 100

  return <CountDisplay count={count} />
}

export function EmojiCount() {
  return (
    <Suspense fallback={<CountDisplay />}>
      <AsyncEmojiCount />
    </Suspense>
  )
}
