"use client";

import { authClient } from "better-auth/client";
import { useRouter } from "next/navigation";

const client = authClient();

export default function UpdateProfile() {
    const router = useRouter();

    const handleUpdate = async (e) => {
        e.preventDefault();

        const form = new FormData(e.target);

        const image = form.get("image");
        const name = form.get("name");

        await client.updateUser({
            image,
            name,
        });

        alert("Profile Updated Successfully");
        router.push("/my-profile");
    };

    return (
        <div className="max-w-md mx-auto p-10">
            <h1 className="text-3xl font-bold mb-5">
                Update Profile
            </h1>

            <form
                onSubmit={handleUpdate}
                className="space-y-4"
            >
                <input
                    name="image"
                    className="border w-full p-2"
                    placeholder="Image URL"
                />

                <input
                    name="name"
                    className="border w-full p-2"
                    placeholder="Name"
                />

                <button className="bg-green-500 text-white px-4 py-2 w-full rounded">
                    Update Information
                </button>
            </form>
        </div>
    );
}