import getAuthNumbers from '@/app/components/getAuthNumbers';
import getSurahInfo from '@/app/lib/getSurahInfo';
import getTranslations from '@/app/lib/getTranslations';
import getVerses from '@/app/lib/getVerses';

export default async function Surah({ params }) {
  const { surah } = await params;
  const authors = {
    bn_ah_bayan: 'আহসানুল বায়ান', // 1
    bn_fazlur_rah: 'ফজলুর রহমান', // 2
    bn_m_khan: 'মুহিউদ্দীন খান', // 3
    bn_mujibur_rah: 'মুজিবুর রহমান', // 4
    bn_taisir: 'তাইসীরুল কুরআন', // 5
    bn_ab_zakariya: 'আবু বকর মুহাম্মাদ যাকারিয়া', // 6
    en_clear_quran: 'The Clear Quran', // 7
    en_a_haleem: 'Abdul Haleem', // 8
    en_jalalain: 'Jalalayn', // 9
    en_khan_hilali: 'Khan and Hilali', // 10
    en_taqi_usmani: 'Taqi Usmani', // 11
    en_pickthall: 'Muhammad Marmaduke Pickthall', // 12
    en_sahih_int: 'Saheeh International', // 13
    en_transliteration: 'Transliteration', // 14
    en_yusuf_ali: 'Yusuf Ali', // 15
  };

  const authNumbers = await getAuthNumbers();

  const auth = [];
  const keys = Object.keys(authors);
  authNumbers.length &&
    (await authNumbers.map((num) => {
      auth.push(keys[num - 1]);
    }));

  if (surah < 115 && surah > 0) {
    const { name_en, name_ar, name_bn, surah_start, ayah_count } = await getSurahInfo(surah);
    const verses = await getVerses(surah_start, ayah_count);
    const translations = await getTranslations(surah_start, ayah_count, auth);

    return (
      <div className="font-sans flex flex-col items-center min-h-screen px-8 pb-8 gap-16 bg-base-100">
        <main className="flex flex-col gap-4 w-160 max-w-full items-center text-center">
          <div className="flex flex-col gap-2 w-full items-center bg-primary/60 p-6 rounded-tr-4xl rounded-bl-4xl text-primary-content">
            <h1 className="text-4xl font-bold">سُوْرَة {name_ar}</h1>
            <div className="flex flex-row justify-between gap-4 flex-wrap text-xl">
              <p>{`${surah}. Surah ${name_en}.`}</p>
              <p>Total ayah: {ayah_count}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {verses.map((verse) => {
              const trans = translations[verses.indexOf(verse)];
              const ayah_no = verse.no - surah_start + 1;
              return (
                <div id={ayah_no} className="flex flex-col gap-3 shadow-2xl rounded-3xl p-6 bg-primary-content/75" key={verses.indexOf(verse)}>
                  <p className="text-accent text-center font-bold mx-auto -mt-3">{ayah_no}</p>
                  <p className="text-3xl text-primary p-4 w-full rounded-xl bg-primary/10">{verse.indo_pak}</p>
                  <div className="w-full text-start flex flex-col gap-6">
                    {auth.map((au) => {
                      return (
                        <div className="w-full flex flex-col gap-2" key={auth.indexOf(au)}>
                          <h5 className="text-secondary">{authors[au]}</h5>
                          <p className="text-primary text-xl">{trans[au]}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    );
  }
}
