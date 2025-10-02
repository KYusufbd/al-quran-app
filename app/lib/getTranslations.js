import connectToMongodb from "./connectToMongodb";

const getTranslations = async (surah_start, ayah_count, auths) => {
  const db = await connectToMongodb();
  const cursor = db.collection("translations");

  const project = {
    _id: 0,
  };

  auths.map((auth) => {
    project[auth] = 1;
  });

  const translations = await cursor
    .find(
      { no: { $gte: surah_start, $lt: surah_start + ayah_count } },
      { projection: project },
    )
    .toArray();

  return translations;
};

export default getTranslations;
