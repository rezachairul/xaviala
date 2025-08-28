const categories = [
  { name: "Puisi", desc: "Kumpulan bait hangat yang lahir dari hati.", count: 24, hover: "hover:bg-rose-100 hover:border-rose-300 hover:text-rose-700" },
  { name: "Cerpen", desc: "Kisah singkat penuh makna, sekali duduk selesai.", count: 15, hover: "hover:bg-pink-100 hover:border-pink-300 hover:text-pink-700" },
  { name: "Esai", desc: "Tulisan reflektif tentang hidup, budaya, dan pemikiran.", count: 8, hover: "hover:bg-emerald-100 hover:border-emerald-300 hover:text-emerald-700" },
  { name: "Jurnal Pribadi", desc: "Catatan keseharian, renungan, dan coretan spontan.", count: 12, hover: "hover:bg-indigo-100 hover:border-indigo-300 hover:text-indigo-700" },
  { name: "Kolaborasi Komunitas", desc: "Proyek menulis bareng sahabat pena Xaviala.", count: 5, hover: "hover:bg-amber-100 hover:border-amber-300 hover:text-amber-700" },
  { name: "Eksperimen Bahasa", desc: "Tulisan unik, gaya bebas, mencoba hal-hal baru.", count: 7, hover: "hover:bg-sky-100 hover:border-sky-300 hover:text-sky-700" },
];

export default function Explore() {
  return (
    <section
      id="explore"
      className="min-h-screen flex flex-col items-center justify-center py-12 px-6 bg-white"
    >
      <h1 className="text-3xl font-bold mb-4 text-gray-900">Jelajahi Karya</h1>
      <p className="text-gray-600 mb-10 max-w-2xl text-center">
        Kumpulan tulisan, catatan, dan karya random ala Xaviala. 
        Kadang serius, kadang ngalor-ngidul, tapi selalu dari hati.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`p-6 border border-gray-200 rounded-xl shadow-sm transition-all duration-300 bg-white group ${cat.hover}`}
          >
            <span
              className={`inline-block text-xs px-3 py-1 rounded-full mb-3 font-medium border border-gray-300 text-gray-500 transition-colors duration-300 group-hover:text-current group-hover:border-transparent`}
            >
              {cat.name}
            </span>
            <h2 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-current">
              {cat.name} ({cat.count})
            </h2>
            <p className="text-gray-500 mb-4">{cat.desc}</p>
            <a
              href="#"
              className="text-sm font-medium text-gray-600 group-hover:text-current transition-colors"
            >
              Selengkapnya →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
