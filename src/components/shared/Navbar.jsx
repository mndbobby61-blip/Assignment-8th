import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="flex justify-between p-4 bg-orange-500 text-white">
            <div className='flex justify-center'>
                <Image
                    src="/assets/shopping-bag.png"
                    alt="bag"
                    width={40}
                    height={40}
                />
                <h1 className="font-bold">Summer Store</h1>
            </div>

            <div className="space-x-4">
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
                <Link href="/my-profile">My Profile</Link>
            </div>

            <div>
                <Link href="/login">Login</Link>
            </div>
            <div className="btn btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>

        </nav>
    );
};

export default Navbar;