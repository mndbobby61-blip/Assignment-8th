"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function MyProfile() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  if (isPending)
    return (
      <h1 className="text-center mt-10 text-gray-500">Loading profile...</h1>
    );

  if (!session) return null;

  const user = session.user;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md text-center border border-orange-100">

        {/* Avatar */}
        <img
          src={user.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
          alt="profile"
          className="w-28 h-28 rounded-full mx-auto border-4 border-orange-400 shadow"
        />

        {/* Name */}
        <h1 className="text-3xl font-bold mt-5 text-orange-500">
          {user.name}
        </h1>

        {/* Email */}
        <p className="text-gray-600 mt-2">{user.email}</p>

        {/* Buttons */}
        <div className="flex gap-3 justify-center mt-6">

          <Link href="/update-profile">
            <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-5 py-2 rounded-xl shadow">
              Update Profile
            </button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 transition text-white px-5 py-2 rounded-xl shadow"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}