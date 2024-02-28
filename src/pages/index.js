//This is the quiz page (our main page and what the user will see)

import Link from "next/link";
import AdminPage from "./admin";

export default function Home() {
  return (
    <>
      <main>
        <h1>Home</h1>
        <Link href="/admin">admin</Link>
      </main>
    </>
  );
}
