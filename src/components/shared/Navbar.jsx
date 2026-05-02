"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const handleLogout = async () => {
        await authClient.signOut();
    };

    const linkStyle = (path) =>
        `px-2 py-1 rounded ${pathname === path ? "bg-white text-orange-500" : ""
        }`;

    return (
        <nav className="bg-orange-500 text-white px-4 py-3">

            {/* TOP BAR */}
            <div className="flex justify-between items-center">

                {/* LOGO */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/assets/shopping-bag.png"
                        width={40}
                        height={40}
                        alt="logo"
                    />
                    <h1 className="font-bold text-xl">Summer Store</h1>
                </div>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex items-center gap-5">

                    <Link className={linkStyle("/")} href="/">
                        Home
                    </Link>

                    <Link className={linkStyle("/products")} href="/products">
                        Products
                    </Link>

                    <Link className={linkStyle("/my-profile")} href="/my-profile">
                        My Profile
                    </Link>

                    {/* AUTH SECTION (DESKTOP) */}
                    {user ? (
                        <div className="flex items-center gap-3 ml-4">

                            <img
                                src={user.image || "/default.png"}
                                className="w-9 h-9 rounded-full border"
                            />

                            <button
                                onClick={handleLogout}
                                className="bg-red-600 px-3 py-1 rounded"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex gap-3 ml-4">
                            <Link href="/login">
                                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-medium transition">
                                    Login
                                </button>
                            </Link>

                            <Link href="/register">
                                <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-medium transition">
                                    Register
                                </button>
                            </Link>
                        </div>
                    )}
                </div>

                {/* MOBILE RIGHT SIDE */}
                <div className="flex items-center gap-3 md:hidden">

                    {/* AVATAR (mobile always visible if logged in) */}
                    {user && (
                        <img
                            src={user.image || "/default.png"}
                            className="w-9 h-9 rounded-full border"
                        />
                    )}

                    {/* HAMBURGER */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-2xl"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden mt-3 bg-orange-600 p-3 rounded  space-y-4">

                    <div className="flex flex-col gap-3">
                        <Link onClick={() => setOpen(false)} href="/">
                            Home
                        </Link>

                        <Link onClick={() => setOpen(false)} href="/products">
                            Products
                        </Link>

                        <Link onClick={() => setOpen(false)} href="/my-profile">
                            Profile
                        </Link>
                    </div>

                    <hr className="border-white/30 my-2" />

                    {/* AUTH MOBILE */}
                    {user ? (
                        <button
                            onClick={() => {
                                handleLogout();
                                setOpen(false);
                            }}
                            className="bg-red-600 w-full py-1 rounded"
                        >
                            Logout
                        </button>
                    ) : (
                        <>
                            <Link href="/login">
                                <button className="bg-blue-600 w-full py-1 rounded">
                                    Login
                                </button>
                            </Link>

                            <Link href="/register">
                                <button className="bg-green-600 w-full py-1 rounded mt-2">
                                    Register
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
}