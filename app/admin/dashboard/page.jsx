"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Jika tidak login → redirect
  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/auth/login"); // replace biar ga bisa back
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <p>Loading...</p>
      </div>
    );
  }

  if (status !== "authenticated") return null; // kalau belum login, jangan render apa-apa

  const handleLogout = () => {
    signOut({ callbackUrl: "/auth/login", redirect: true });
  };

  const cards = [
    { title: "Buku", value: 120, color: "text-indigo-600" },
    { title: "Cerita Pendek", value: 45, color: "text-green-600" },
    { title: "Puisi", value: 86, color: "text-pink-600" },
    { title: "Curhat", value: 1, color: "text-indigo-600" },
    { title: "Gabut", value: 15, color: "text-green-600" },
    { title: "Apa Hayoooo", value: 12, color: "text-pink-600" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard Admin</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>

        {/* Welcome */}
        <p className="text-gray-600 mb-6">
          Selamat datang,{" "}
          <span className="font-semibold text-indigo-600">
            {session?.user?.name || session?.user?.email}
          </span>
          ! 🚀
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white shadow rounded-xl p-4 flex flex-col justify-between hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold text-gray-700">
                {card.title}
              </h2>
              <p className={`text-2xl font-bold ${card.color}`}>{card.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
