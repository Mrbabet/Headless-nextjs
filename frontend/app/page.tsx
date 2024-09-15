import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className="showreal-container">
        <Link
          href="/portfolio"
          className="py-[12px] px-[16px] rounded-3xl  bg-black text-white"
        >
          Portfolio
        </Link>
      </div>
    </>
  );
}
