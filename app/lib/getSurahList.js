import surahList from "./al-quran-surah-list.json";

const getSurahList = async (language) => {
  const surahNames = [];

  await surahList.map((surah) => {
    surahNames.push(surah[`name_${language}`]);
  });

  return surahNames;
};

export default getSurahList;
