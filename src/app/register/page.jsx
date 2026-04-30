"use client";

export default function RegisterPage() {
    return (
        <div className="max-w-md mx-auto p-10">
            <h1 className="text-3xl mb-4">Register</h1>

            <form className="space-y-4">
                <input className="border w-full p-2" placeholder="Name" />
                <input className="border w-full p-2" placeholder="Email" />
                <input className="border w-full p-2" placeholder="Photo URL" />
                <input
                    className="border w-full p-2"
                    placeholder="Password"
                    type="password"
                />

                <button className="bg-orange-500 text-white px-4 py-2 w-full">
                    Register
                </button>
            </form>
        </div>
    );
}