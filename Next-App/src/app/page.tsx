import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link href="/">MyApp</Link>
      </div>

      <nav className="flex gap-6 items-center">
        <Link href="/users" className="hover:text-blue-600 transition">
          Users
        </Link>
        <Link href="/users/new" className="hover:text-blue-600 transition">
          New User
        </Link>

        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </header>
  );
}
