import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
    const isLoggedIn = false; // পরে auth হলে এটা dynamic হবে

    return (
        <nav className="flex justify-between items-center p-4 bg-orange-500 text-white">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <Image
                    src="/assets/shopping-bag.png"
                    alt="bag"
                    width={40}
                    height={40}
                />
                <h1 className="font-bold text-xl">Summer Store</h1>
            </div>

            {/* Nav Links */}
            <div className="space-x-6">
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
                <Link href="/my-profile">My Profile</Link>
            </div>

            {/* Auth Section */}
            <div className="flex items-center gap-4">
                {isLoggedIn ? (
                    <>
                        <div className="btn btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="user"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                />
                            </div>
                        </div>

                        <button className="bg-red-500 px-4 py-2 rounded">
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link href="/login">
                            <button className="bg-blue-500 px-4 py-2 rounded">
                                Login
                            </button>
                        </Link>

                        <Link href="/register">
                            <button className="bg-green-500 px-4 py-2 rounded">
                                Register
                            </button>
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;