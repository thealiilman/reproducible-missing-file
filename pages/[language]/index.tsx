export const config = {
  runtime: 'experimental-edge',
}

export default function Home({ data }: { data: any }): any {
  return (
    <div className="bg-black p-16">
      <h1 className="text-white">
        Hello, hello, it&apos;s good to be back, it&apos;s good to be back
      </h1>
    </div>
  )
}
