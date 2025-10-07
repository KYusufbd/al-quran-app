import getSurahInfo from '@/app/lib/getSurahInfo';
import getTranslations from '@/app/lib/getTranslations';
import getVerses from '@/app/lib/getVerses';
import { cookies } from 'next/headers';

export default async function Surah({ params }) {
  const { surah } = await params;
  const author_list = {
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
  const keys = Object.keys(author_list);

  const cookieStore = await cookies();
  const script = cookieStore.get('script');
  const auths = cookieStore.get('auths');
  const script_no = script?.value ? await JSON.parse(script.value) : 2;
  const authNumbers = auths?.value ? await JSON.parse(auths.value) : [];

  const authors = [];
  await authNumbers.map((num) => {
    authors.push(keys[num - 1]);
  });

  if (surah < 115 && surah > 0) {
    const { name_en, name_ar, name_bn, surah_start, ayah_count } = await getSurahInfo(surah);
    const verses = await getVerses(surah_start, ayah_count, script_no);
    const translations = await getTranslations(surah_start, ayah_count, authors);

    return (
      <div id="surah" script_no={script_no} auth={JSON.stringify(authNumbers)} className="font-sans flex flex-col items-center min-h-screen px-1 pb-8 gap-16 bg-base-100">
        <main className="flex flex-col gap-4 w-160 max-w-full items-center text-center">
          <div className="text-accent font-bold flex flex-col items-center p-6 bg-primary rounded-sm gap-4 w-full">
            <h1 className="text-4xl font-amiri font-medium">سُوْرَةُ {name_ar}</h1>
            <div className="flex flex-row gap-4 flex-wrap">
              <p>{`${surah}. Surah ${name_en}.`}</p>
              <p>Total ayah: {ayah_count}</p>
            </div>
          </div>

          {/* 
           Old banner is commented here:

          <div className="flex flex-col gap-2 w-full items-center bg-primary/60 p-6 rounded-tr-4xl rounded-bl-4xl text-primary-content">
            <h1 className="text-4xl font-bold">سُوْرَة {name_ar}</h1>
            <div className="flex flex-row justify-between gap-4 flex-wrap text-xl">
              <p>{`${surah}. Surah ${name_en}.`}</p>
              <p>Total ayah: {ayah_count}</p>
            </div>
          </div> */}

          <div className="flex flex-col gap-1 w-full">
            {verses.map((verse, index) => {
              const trans = translations[index];
              const ayah_no = verse.no - surah_start + 1;
              return (
                <div id={ayah_no} className="flex flex-col gap-3 shadow-2xl rounded-xl p-2 pt-4 bg-primary-content/75" key={index}>
                  <p className="text-accent text-center font-bold -mb-3 mx-auto -mt-4">{ayah_no}</p>
                  <p className={`text-3xl text-primary ${script_no == 1 ? 'font-amiri leading-18' : 'font-hafs leading-14'} p-1 w-full rounded-xl bg-primary/20`}>
                    {verse?.indo_pak || verse?.uthmani}
                  </p>
                  {authors.length ? (
                    <div className="w-full text-start flex flex-col p-2 gap-4">
                      {authors.map((au, index) => {
                        return (
                          <div className="w-full flex flex-col gap-1" key={index}>
                            <h5 className="text-secondary">{author_list[au]}</h5>
                            <p className="text-primary text-xl">{trans[au]}</p>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}
          </div>
        </main>
      </div>
    );
  }
}
