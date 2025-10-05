import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
let client;
let db;

export default async function connectToMongodb() {
  console.log("Started connection to MondoDB!");
  if (db) return db;
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  try {
    // Connect the client to the server	(optional starting in v4.7)
    console.log("Trying to connect.");
    await client.connect();
    console.log("Connected to MongoDB!");

    db = client.db("al_quran");
    return db;
  } catch {
    (err) => console.log(err);
    throw err;
  }
}
