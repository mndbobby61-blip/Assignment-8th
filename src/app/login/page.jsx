"use client";

import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();

        alert("Login Successful");
        router.push("/");
    };

    return (
        <div className="max-w-md mx-auto p-10">
            <h1 className="text-3xl mb-5">Login</h1>

            <form onSubmit={handleLogin} className="space-y-4">
                <input className="border p-2 w-full" placeholder="Email" />
                <input
                    className="border p-2 w-full"
                    placeholder="Password"
                    type="password"
                />

                <button className="bg-blue-500 text-white w-full py-2">
                    Login
                </button>
            </form>
        </div>
    );
}