import "server-only";

import { betterAuth } from "better-auth"; // THIS IS REQUIRED
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is missing in .env.local");
}

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("summer-store");

export const auth = betterAuth({

    baseURL: process.env.BETTER_AUTH_URL,

    trustedOrigins: [
        "https://assignment-8th-yc3x-dzrta5ei1-mndbobby61-4187s-projects.vercel.app",
        "https://assignment-8th-vvpf.vercel.app",
        "http://localhost:3000"
    ],

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