import Image from "next/image";
import {
  IconMail,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-gray-700">
      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Brand */}
        <div>
          <Image
            src="/assets/img/xaviala-logo.svg"
            alt="Xaviala Logo"
            width={120}
            height={120}
            className="rounded-full mb-3 mx-auto md:mx-0"
            priority
          />
          <p className="text-sm italic text-gray-500">
            Setiap kata punya rumahnya ✨
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Navigasi</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="/public/about" className="text-gray-500 hover:text-rose-600 transition">
                About
              </a>
            </li>
            <li>
              <a href="/public/category" className="text-gray-500 hover:text-rose-600 transition">
                Category
              </a>
            </li>
            <li>
              <a href="/public/contact" className="text-gray-500 hover:text-rose-600 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Terhubung</h3>
          <div className="flex justify-center md:justify-start gap-5 mt-4">
            <a
              href="mailto:laulakn@gmail.com"
              aria-label="Email"
              className="text-gray-500 hover:text-rose-600 transition-transform transform hover:scale-110"
            >
              <IconMail size={22} />
            </a>
            <a
              href="https://www.instagram.com/laulakn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-500 hover:text-pink-500 transition-transform transform hover:scale-110"
            >
              <IconBrandInstagram size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/laulakn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-indigo-600 transition-transform transform hover:scale-110"
            >
              <IconBrandLinkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center py-6 border-t border-gray-200">
        <p className="text-sm italic text-gray-600">
          “Kata-kata ini adalah rumah. Terima kasih sudah singgah ☕✨”
        </p>
        <p className="mt-2 text-xs text-gray-400">
          © 2025 Xaviala. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
