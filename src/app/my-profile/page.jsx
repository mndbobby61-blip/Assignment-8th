import Link from "next/link";

export default function Profile() {
    return (
        <div className="p-10">
            <img
                src="https://i.ibb.co/test.png"
                className="w-32 rounded-full"
            />
            <h2>Name: Bobby</h2>
            <p>Email: bobby@gmail.com</p>

            <Link href="/update-profile">
                <button className="bg-blue-500 text-white px-4 py-2 mt-4">
                    Update
                </button>
            </Link>
        </div>
    );
}