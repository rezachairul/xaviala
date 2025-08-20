// Dashboard Admin

"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Kalau belum login, redirect ke /auth/login
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Dashboard Admin
        </h1>
        <p className="text-gray-600 mb-6">
          Selamat datang,{" "}
          <span className="font-semibold text-indigo-600">
            {session?.user?.name || session?.user?.username || "Penulis"}
          </span>
          ! 🚀
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-xl p-4">
            <h2 className="text-lg font-semibold text-gray-700">Buku</h2>
            <p className="text-2xl font-bold text-indigo-600">120</p>
          </div>
          <div className="bg-white shadow rounded-xl p-4">
            <h2 className="text-lg font-semibold text-gray-700">Cerita Pendek</h2>
            <p className="text-2xl font-bold text-green-600">45</p>
          </div>
          <div className="bg-white shadow rounded-xl p-4">
            <h2 className="text-lg font-semibold text-gray-700">Puisi</h2>
            <p className="text-2xl font-bold text-pink-600">86</p>
          </div>
          <div className="bg-white shadow rounded-xl p-4">
            <h2 className="text-lg font-semibold text-gray-700">Curhat</h2>
            <p className="text-2xl font-bold text-indigo-600">1</p>
          </div>
          <div className="bg-white shadow rounded-xl p-4">
            <h2 className="text-lg font-semibold text-gray-700">Gabut</h2>
            <p className="text-2xl font-bold text-green-600">15</p>
          </div>
          <div className="bg-white shadow rounded-xl p-4">
            <h2 className="text-lg font-semibold text-gray-700">Apa Hayoooo</h2>
            <p className="text-2xl font-bold text-pink-600">12</p>
          </div>
        </div>
      </div>
    </div>
  );
}
