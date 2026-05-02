"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function Register() {
    const router = useRouter();
    const [error, setError] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        const form = new FormData(e.target);

        const name = form.get("name");
        const email = form.get("email");
        const image = form.get("image") ||  "https://i.ibb.co/4pDNDk1/default-avatar.png";
        const password = form.get("password");

        const res = await authClient.signUp.email({
            name,
            email,
            password,
            image,
            callbackURL: "/login",
        });

        if (res.error) {
            setError(res.error.message);
            return;
        }

        router.push("/login");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-200 px-4">

            {/* CARD */}
            <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 border border-orange-100">

                {/* TITLE */}
                <h1 className="text-3xl font-extrabold text-center text-orange-500">
                    Create Account
                </h1>
                <p className="text-center text-gray-500 mt-2">
                    Register to join Summer Store
                </p>

                {/* ERROR */}
                {error && (
                    <div className="bg-red-100 text-red-600 p-2 mt-4 rounded text-sm text-center">
                        {error}
                    </div>
                )}

                {/* FORM */}
                <form onSubmit={handleRegister} className="mt-6 space-y-4">

                    <input
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        required
                    />

                    <input
                        name="email"
                        type="email"
                        placeholder="Email address"
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        required
                    />

                    <input
                        name="image"
                        type="text"
                        placeholder="Image URL"
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        required
                    />

                    {/* BUTTONS */}
                    <div className="flex gap-3">

                        <button
                            type="submit"
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition"
                        >
                            Register
                        </button>

                        <button
                            type="reset"
                            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 rounded-lg transition"
                        >
                            Reset
                        </button>

                    </div>
                </form>

                {/* LINK */}
                <p className="text-center mt-5 text-sm text-gray-500">
                    Already have an account?{" "}
                    <a href="/login" className="text-orange-500 font-semibold">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}