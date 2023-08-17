import Head from 'next/head';
import Link from 'next/link';

export default function Other() {
  return <div className="p-8">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid h-full place-items-center justify-center">
        <h1 className="text-7xl p-4 my-6 shadow-lg shadow-[#106ae0] rounded border from-purple-700 via-pink-500 to-blue-500 bg-gradient-to-r bg-clip-text text-transparent">
          Other page
        </h1>
      </div>
      <p className="text-xl">
        This is another awesome page! Yay! 🎉
      </p>
      <p>
        I want to go <Link href="/">back!</Link>
      </p>
    </div>
}
  