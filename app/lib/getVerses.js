import connectToMongodb from "./connectToMongodb";

const getVerses = async (surah_start, ayah_count, script_no) => {
  const db = await connectToMongodb();
  const cursor = db?.collection("verses");

  const scripts = {
    1: "uthmani",
    2: "indo_pak",
  };

  const script = scripts[script_no];
  const projection = { _id: 0, no: 1 };
  projection[script] = 1;

  const verses = await cursor
    .find(
      { no: { $gte: surah_start, $lt: surah_start + ayah_count } },
      { projection: projection },
    )
    .toArray();
  return verses;
};

export default getVerses;
