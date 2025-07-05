import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10">
        <h1 >Hello World</h1>
        <Link href="/users">Users page</Link><br />
        <Link href="/users/new">New User page</Link>
    </div>
  );
}
