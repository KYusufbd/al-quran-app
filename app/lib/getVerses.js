import connectToMongodb from "./connectToMongodb";
import getSurahInfo from "./getSurahInfo";

const getVerses = async (surah) => {
  const { surah_start, ayah_count } = await getSurahInfo(surah);
  const db = await connectToMongodb();
  const cursor = db?.collection("verses");
  const verses = await cursor
    .find(
      { no: { $gte: surah_start, $lt: surah_start + ayah_count } },
      { projection: { _id: 0, uthmani: 1, indo_pak: 1 } },
    )
    .toArray();
  return verses;
};

export default getVerses;
