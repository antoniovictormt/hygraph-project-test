import Image from 'next/image'

import { getClient } from '~/API/graphql'

import { RacesQuery, RacesDocument } from '../../graphql/generated/schema'

export default async function Home() {
  const { data } = await getClient().query({ query: RacesDocument })
  const query = data as RacesQuery
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {query.races.map(item => (
          <div key={item.id}>
            <div className="flex justify-center items-center gap-4">
              <div className="border-2 border-red-800 rounded-lg">
                <Image
                  className="rounded-md"
                  src={String(item.image?.url)}
                  alt={String(item.image?.fileName)}
                  width={1000}
                  height={1000}
                  priority
                />
              </div>

              <div>
                <p>{item.name}</p>

                <p className="text-justify">{item.description}</p>

                <p>{item.skills}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
