const categories = [
  { name: "Puisi", desc: "Kumpulan bait hangat yang lahir dari hati.", count: 24, color: "bg-rose-300 text-rose-900" },
  { name: "Cerpen", desc: "Kisah singkat penuh makna, sekali duduk selesai.", count: 15, color: "bg-pink-300 text-pink-900" },
  { name: "Esai", desc: "Tulisan reflektif tentang hidup, budaya, dan pemikiran.", count: 8, color: "bg-emerald-300 text-emerald-900" },
  { name: "Jurnal Pribadi", desc: "Catatan keseharian, renungan, dan coretan spontan.", count: 12, color: "bg-indigo-300 text-indigo-900" },
  { name: "Kolaborasi Komunitas", desc: "Proyek menulis bareng sahabat pena Xaviala.", count: 5, color: "bg-amber-300 text-amber-900" },
  { name: "Eksperimen Bahasa", desc: "Tulisan unik, gaya bebas, mencoba hal-hal baru.", count: 7, color: "bg-sky-300 text-sky-900" },
];

export default function Explore() {
  return (
    <section
      id="explore"
      className="min-h-screen flex flex-col items-center justify-center py-12 px-6 bg-white"
    >
      <h1 className="text-3xl font-bold mb-4 text-gray-900">Jelajahi Karya</h1>
      <p className="text-gray-700 mb-10 max-w-2xl text-center">
        Kumpulan tulisan, catatan, dan karya random ala Xaviala. 
        Kadang serius, kadang ngalor-ngidul, tapi selalu dari hati.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-white flex flex-col"
          >
            <span
              className={`inline-block text-xs px-3 py-1 rounded-full mb-3 font-medium ${cat.color}`}
            >
              {cat.name}
            </span>
            <h2 className="text-lg font-semibold mb-2 text-gray-900">
              {cat.name} ({cat.count})
            </h2>
            <p className="text-gray-600 mb-4 flex-grow">{cat.desc}</p>
            <a
              href="#"
              className="text-sm font-medium text-rose-600 hover:text-rose-800 transition"
            >
              Selengkapnya →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
