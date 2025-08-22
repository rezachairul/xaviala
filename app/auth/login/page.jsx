"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!res.error) {
      router.push("/admin/dashboard");
    } else {
      alert("Ups, gagal login. Coba cek lagi email & password ya 😅");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-pink-100 via-white to-indigo-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/assets/img/xaviala-logo.svg"
            alt="Xaviala Logo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold mb-2 text-center text-pink-700">
          Halo lagi, Penulis Hebat ✍️
        </h1>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Yuk login dulu biar bisa lanjut nulis & berbagi cerita 🚀
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email kamu"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-pink-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password rahasia ✨"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition-colors duration-300"
          >
            Masuk 🎉
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400 mt-6">
          "Setiap login adalah langkah baru buat nulis lebih banyak." 💡
        </p>
      </div>
    </div>
  );
}
