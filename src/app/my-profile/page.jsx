"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function Profile() {
    const { data: session, isLoading } = authClient.useSession();

    if (isLoading) {
        return (
            <h1 className="text-center text-2xl mt-10">
                Loading...
            </h1>
        );
    }

    if (!session?.user) {
        return (
            <div className="text-center mt-10">
                <h1 className="text-3xl">Please login first</h1>

                <Link href="/login">
                    <button className="bg-orange-500 text-white px-4 py-2 mt-4 rounded">
                        Go to Login
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <div className="p-10 max-w-xl mx-auto bg-white shadow-lg rounded-xl mt-10">

            <img
                src={
                    session.user.image ||
                    "https://i.ibb.co/placeholder.png"
                }
                alt="profile"
                className="w-32 h-32 rounded-full mx-auto object-cover"
            />

            <h2 className="text-2xl font-bold mt-4 text-center">
                {session.user.name}
            </h2>

            <p className="text-center mt-2 text-gray-600">
                {session.user.email}
            </p>

            <div className="text-center">
                <Link href="/update-profile">
                    <button className="bg-blue-500 text-white px-4 py-2 mt-5 rounded hover:bg-blue-600">
                        Update Profile
                    </button>
                </Link>
            </div>

        </div>
    );
}