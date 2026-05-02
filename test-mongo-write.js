import { MongoClient } from "mongodb";
const uri = "mongodb+srv://SkillSphere-DB:Gtryy051TDA3G0I2@cluster0.bngleot.mongodb.net/SkillSphere-DB?appName=Cluster0";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const db = client.db("SkillSphere-DB");
    const collection = db.collection("test");
    await collection.insertOne({ test: 1 });
    console.log("Write successful!");
    await collection.deleteOne({ test: 1 });
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}
run();
