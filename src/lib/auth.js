import "server-only";

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is missing in .env.local");
}

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("summer-store");

export const auth = betterAuth({
    baseURL: process.env.BETTER_AUTH_URL, 

    database: mongodbAdapter(db, {
        client,
    }),

    emailAndPassword: {
        enabled: true,
    },

    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }
    }
});