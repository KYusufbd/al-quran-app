import getSurahInfo from "@/app/lib/getSurahInfo";
import getTranslations from "@/app/lib/getTranslations";
import getVerses from "@/app/lib/getVerses";

export default async function Surah({ params }) {
  const { surah } = await params;
  const auths = [
    { bn_ah_bayan: "আহসানুল বায়ান" },
    { bn_fazlur_rah: "ফজলুর রহমান" },
    { bn_m_khan: "মুহিউদ্দীন খান" },
    { bn_mujibur_rah: "মুজিবুর রহমান" },
    { bn_taisir: "তাইসীরুল কুরআন" },
    { bn_ab_zakariya: "আবু বকর মুহাম্মাদ যাকারিয়া" },
    { en_a_haleem: "Abdul Haleem" },
    { en_jalalain: "Jalalayn" },
    { en_khan_hilali: "Khan and Hilali" },
    { en_taqi_usmani: "Taqi Usmani" },
    { en_pickthall: "Muhammad Marmaduke Pickthall" },
    { en_sahih_int: "Saheeh International" },
    { en_transliteration: "Transliteration" },
    { en_yusuf_ali: "Yusuf Ali" },
  ];

  if (surah < 115 && surah > 0) {
    const { name_en, name_ar, name_bn, surah_start, ayah_count } =
      await getSurahInfo(surah);
    const verses = await getVerses(surah_start, ayah_count);
    const translations = await getTranslations(surah_start, ayah_count, [
      "bn_ah_bayan",
      "bn_m_khan",
    ]);

    return (
      <div className="font-sans flex flex-col items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gradient-to-br from-accent/100 to-accent/60">
        <main className="flex flex-col gap-10 w-full items-center text-center">
          <div className="flex flex-col gap-4 w-full items-center">
            <h1 className="text-4xl text-primary font-bold">{name_ar}</h1>
            <h1 className="text-4xl text-primary font-bold">{name_en}</h1>
            <div className="flex flex-row justify-between gap-4 flex-wrap">
              <p className="text-2xl text-secondary">Surah number: {surah}</p>
              <p className="text-2xl text-secondary">
                Ayah count: {ayah_count}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {verses.map((verse) => {
              return (
                <p
                  className="text-3xl text-primary"
                  key={verses.indexOf(verse)}
                >
                  {verse.indo_pak}
                </p>
              );
            })}
          </div>
        </main>
      </div>
    );
  }
}
