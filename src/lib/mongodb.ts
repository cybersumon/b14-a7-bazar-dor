import { MongoClient } from "mongodb";
import dns from "node:dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const uri = process.env.MONGODB_URI;

if (!uri){
    throw new Error("MONGODB_URI is not define in .env.local");

}

const client = new MongoClient(uri);
// const clientPromise = client.connect();
export default client;
