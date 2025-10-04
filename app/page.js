import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gradient-to-br from-accent/100 to-accent/60">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl text-primary font-bold">
          Welcome to Al-Quran App!
        </h1>
        <p className="text-2xl text-secondary">
          Al-Quran project by Sunnah Today team.
        </p>
        <Link href='/al-quran' className="btn btn-secondary rounded-md text-xl mt-6">Read Al-Quran</Link>
      </main>
    </div>
  );
}
