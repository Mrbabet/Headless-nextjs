import Link from "next/link";

export default function Header() {
  return (
    <header className="mt-4 ml-4 mr-4 mb-0">
      <div className="flex flex-row justify-between">
        <Link href={"/"}>Abigail Frączek</Link>
        <Link
          className="bg-transparent border border-black pt-3 pb-3 pl-4 pr-4 rounded-3xl"
          href="/about"
        >
          Info
        </Link>
      </div>
    </header>
  );
}
