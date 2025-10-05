import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gradient-to-br from-accent/80 to-accent/40">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-row flex-wrap items-end gap-4">
          <Image
            src="/al-quran-logo.png"
            width={240}
            height={240}
            alt="al-quran-logo"
            className="mx-auto"
          />
          <div className="flex flex-col gap-4 mx-auto">
            <h1 className="text-4xl text-primary font-bold">Al-Quran App</h1>
            <p className="text-2xl text-primary">
              Read and learn the holy Quran.
            </p>
            <p className="text-xl text-secondary">
              Al-Quran project by{" "}
              <a
                href="https://sunnahtoday.com/"
                target="_blank"
                className="hover:underline"
              >
                Sunnah Today
              </a>{" "}
              team.
            </p>
            <Link
              href="/al-quran"
              className="btn btn-secondary rounded-md text-xl mt-6"
            >
              Read Al-Quran
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
