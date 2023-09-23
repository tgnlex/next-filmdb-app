import Head from "next/head";
import MovieSearch from "./components/MovieSearch";
export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>Movie DB</title>
        <meta name="description" content="A simple movie database for end users." />
      </Head>
      <main className="container mx-auto py-18 px-4 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8 text-white">Movie DB</h1>
        <MovieSearch />
      </main>
    </div>
    )
}