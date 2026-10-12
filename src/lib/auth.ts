import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import client from "./mongodb";

// import clientPromise from "./mongodb";

// const client =await clientPromise;
const db = client.db("bazardor");

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client,
    }),

    emailAndPassword: {
        enabled: true,
    },
});