const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.MONGODB_URI;
let client;
let db;

async function connectToMongodb() {
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
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );

    db = client.db("al_quran");

    console.log();
  } catch {
    (err) => console.log(err);
  }
  return db;
}

module.exports = connectToMongodb;
