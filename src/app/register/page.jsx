"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
    const router = useRouter();

    const handleRegister = (e) => {
        e.preventDefault();

        alert("Registered Successfully");
        router.push("/login");
    };

    return (
        <div className="max-w-md mx-auto p-10">
            <h1 className="text-3xl mb-5">Register</h1>

            <form onSubmit={handleRegister} className="space-y-4">
                <input className="border p-2 w-full" placeholder="Name" />
                <input className="border p-2 w-full" placeholder="Email" />
                <input className="border p-2 w-full" placeholder="Photo URL" />
                <input
                    className="border p-2 w-full"
                    placeholder="Password"
                    type="password"
                />

                <button className="bg-green-500 text-white w-full py-2">
                    Register
                </button>
            </form>
        </div>
    );
}