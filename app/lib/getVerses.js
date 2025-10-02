import connectToMongodb from "./connectToMongodb";

const getVerses = async (surah_start, ayah_count) => {
  const db = await connectToMongodb();
  const cursor = db?.collection("verses");
  const verses = await cursor
    .find(
      { no: { $gte: surah_start, $lt: surah_start + ayah_count } },
      { projection: { _id: 0, no: 1, uthmani: 1, indo_pak: 1 } },
    )
    .toArray();
  return verses;
};

export default getVerses;
