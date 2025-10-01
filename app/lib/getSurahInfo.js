import surahList from "./al-quran-surah-list.json";

const getSurahInfo = async (surah) => {
  return surahList[surah - 1];
};

export default getSurahInfo;
