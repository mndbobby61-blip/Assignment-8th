import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-orange-400 text-white text-center py-12 mt-10">

        {/* Brand */}
        <h2 className="text-3xl font-bold">Summer Store</h2>

        {/* Description */}
        <p className="text-white mt-3 max-w-xl mx-auto text-sm">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Divider */}
        <div className="my-6 text-white/70">
          ____________________________________________
        </div>

        {/* 🔥 Contact Info */}
        <div className="mt-4">
          <h3 className="font-semibold text-lg">Contact Information</h3>

          <div className="text-sm mt-2 space-y-1 text-white/90">
            <p>Add: Dhaka, Bangladesh</p>
            <p>Phone: +880 1234-567890</p>
            <p>Email: support@summerstore.com</p>
          </div>
        </div>
        
        <div className="my-6 text-white/70">
          ____________________________________________
        </div>

        {/* Social Section */}
        <div className="mt-6 font-semibold">Social Links</div>

        <div className="flex justify-center gap-4 mt-4">

          <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full">
            <img src="/assets/instagram.png" alt="Instagram logo" className="w-5 h-5" />
          </div>

          <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full">
            <img src="/assets/facebook.png" alt="Facebook logo" className="w-5 h-5" />
          </div>

          <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full">
            <img src="/assets/twitter.png" alt="Twitter logo" className="w-5 h-5" />
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between px-6 mt-10 gap-4 text-sm text-white/80">

          <p>© 2025 Summer Store. All rights reserved.</p>

          <div className="flex gap-4 justify-center">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Contact</p>
          </div>

        </div>

      </footer>
    </div>
  );
};

export default Footer;