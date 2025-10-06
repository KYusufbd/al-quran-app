import React from "react";
import getSurahList from "../lib/getSurahList";
import Link from "next/link";

const AlQuranPage = async () => {
  const surahNamesAr = await getSurahList("ar");
  const surahNamesEn = await getSurahList("en");

  return (
    <div className="flex flex-col w-full bg-base-300">
      <div className="text-accent font-bold flex flex-col items-center p-6 bg-accent-content/60 gap-2">
        <h1 className="text-3xl">Al Quran</h1>
        <div className="flex flex-row gap-4 flex-wrap">
          <h3 className="text-lg">Total Surah: 114</h3>
          <h3 className="text-lg">Total Ayah: 6236</h3>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-240 max-w-full mx-auto p-4">
        {surahNamesAr.map((name, index) => {
          return (
            <Link key={index} href={`/al-quran/${index + 1}`}>
              <div className="w-full flex flex-col text-center justify-start items-center p-3 rounded-lg shadow-xl h-52 gap-3 bg-primary-content/80 text-primary font-bold">
                <h3 className="text-base mb-3">{index + 1}</h3>
                <h3 className="text-2xl">{name}</h3>
                <h3 className="text-2xl">{surahNamesEn[index]}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AlQuranPage;
