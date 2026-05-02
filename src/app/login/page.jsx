"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { GrGoogle } from "react-icons/gr";

export default function Login() {
    const router = useRouter();
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        const form = new FormData(e.target);

        const email = form.get("email");
        const password = form.get("password");

        const res = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/",
        });

        if (res.error) {
            setError(res.error.message);
            return;
        }

        router.push("/");
    };

    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-200 px-4">

            {/* CARD */}
            <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 border border-orange-100">

                {/* TITLE */}
                <h1 className="text-3xl font-extrabold text-center text-orange-500">
                    Sign Up
                </h1>
                <p className="text-center text-gray-500 mt-2">
                    Login to your Summer Store account
                </p>

                {/* ERROR */}
                {error && (
                    <div className="bg-red-100 text-red-600 p-2 mt-4 rounded text-sm text-center">
                        {error}
                    </div>
                )}

                {/* FORM */}
                <form onSubmit={handleLogin} className="mt-6 space-y-4">

                    <input
                        name="email"
                        type="email"
                        placeholder="Email address"
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        required
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
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
                        >
                            Login
                        </button>

                        <button
                            type="reset"
                            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 rounded-lg transition"
                        >
                            Reset
                        </button>

                    </div>
                </form>

                {/* DIVIDER */}
                <div className="flex items-center my-6">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <p className="px-3 text-sm text-gray-400">OR</p>
                    <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                {/* GOOGLE LOGIN */}
                <button
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-2 border py-3 rounded-lg hover:bg-gray-50 transition font-medium">
                    <GrGoogle className="text-red-500" />
                    Continue with Google
                </button>

                {/* REGISTER LINK */}
                <p className="text-center mt-5 text-sm text-gray-500">
                    Don’t have an account?{" "}
                    <Link href="/register" className="text-orange-500 font-semibold">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}