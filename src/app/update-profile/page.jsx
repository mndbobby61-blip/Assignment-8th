"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function UpdateProfile() {
  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    await authClient.updateUser({
      name: form.get("name"),
      image: form.get("image"),
    });

    router.push("/my-profile");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center px-4">

      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md border border-orange-100">

        <h1 className="text-2xl font-bold text-center text-orange-600 mb-6">
          Update Profile
        </h1>

        <form onSubmit={handleUpdate} className="flex flex-col gap-4">

          <input
            name="name"
            placeholder="Enter your name"
            className="border-gray-600 shadow-2xl rounded-xl p-3 w-full focus:outline-blue-400"
          />

          <input
            name="image"
            placeholder="Image URL"
            className="border-gray-600 shadow-2xl rounded-xl p-3 w-full focus:outline-blue-400"
          />

          <button className="bg-orange-500 hover:bg-orange-600 transition text-white p-3 rounded-xl">
            Save Changes
          </button>

        </form>

        <button
          onClick={() => router.push("/my-profile")}
          className="mt-4 text-sm text-gray-500 hover:text-black"
        >
          ← Back to Profile
        </button>

      </div>
    </div>
  );
}