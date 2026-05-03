"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function UpdateProfile() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const image = form.get("image"); // 🔥 direct link input

    await authClient.updateUser({
      name,
      image, // 🔥 save URL directly
    });

    router.push("/my-profile");
    router.refresh();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4">

      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md">

        <h1 className="text-2xl font-bold text-center text-orange-500 mb-6">
          Update Profile
        </h1>

        {/* 🔥 Preview */}
        <div className="flex flex-col items-center mb-6">

          <img
            src={user?.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
            className="w-24 h-24 rounded-full border-4 border-orange-400"
          />

          <p className="mt-2 font-semibold">{user?.name}</p>

        </div>

        {/* 🔥 FORM */}
        <form onSubmit={handleUpdate} className="flex flex-col gap-4">

          {/* Name */}
          <input
            name="name"
            defaultValue={user?.name}
            placeholder="Enter your name"
            className="border p-3 rounded-xl"
          />

          {/* 🔥 IMAGE DIRECT LINK INPUT */}
          <input
            name="image"
            defaultValue={user?.image || ""}
            placeholder="Paste image direct link here"
            className="border p-3 rounded-xl"
          />

          <button className="bg-green-500 text-white p-3 rounded-xl">
            Save Changes
          </button>

        </form>

        <button
          onClick={() => router.push("/my-profile")}
          className="mt-4 text-sm text-gray-500"
        >
          Cancel
        </button>

      </div>

    </div>
  );
}