//This is the quiz page (our main page and what the user will see)

import Link from "next/link";
import AdminPage from "./admin";

export default function Home() {
  return (
    <>
      <main>
        <h1>Home</h1>
        <Link href="/admintest">admin</Link>
        <div className="container mx-auto relative max-w-5xl pt-20 sm:pt-24 lg:pt-32 px-4">
          <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
            Welcome to our Quiz!
          </h1>
          <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
            <button className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto">
              <Link href="/quiz">Start here</Link>
            </button>
            <button className=" hover:bg-slate-700 outline-dotted focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-black font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto">
              <Link href="/admintest">Create your own quiz!</Link>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
