export default function UpdateProfile() {
    return (
        <div className="max-w-md mx-auto p-10">
            <h1>Update Profile</h1>

            <form className="space-y-4">
                <input className="border w-full p-2" placeholder="Image URL" />
                <input className="border w-full p-2" placeholder="Name" />

                <button className="bg-green-500 text-white px-4 py-2">
                    Update Information
                </button>
            </form>
        </div>
    );
}