export default function Category() {
  const categories = [
    { name: "Puisi", desc: "Kumpulan bait hangat yang lahir dari hati.", count: 24, color: "rose" },
    { name: "Cerpen", desc: "Kisah singkat penuh makna, sekali duduk selesai.", count: 15, color: "pink" },
    { name: "Esai", desc: "Tulisan reflektif tentang hidup, budaya, dan pemikiran.", count: 8, color: "emerald" },
    { name: "Jurnal Pribadi", desc: "Catatan keseharian, renungan, dan coretan spontan.", count: 12, color: "indigo" },
    { name: "Kolaborasi Komunitas", desc: "Proyek menulis bareng sahabat pena Xaviala.", count: 5, color: "amber" },
    { name: "Eksperimen Bahasa", desc: "Tulisan unik, gaya bebas, mencoba hal-hal baru.", count: 7, color: "sky" },
  ];

  return (
    <section
      id="category"
      className="w-full min-h-screen py-20 bg-gradient-to-b from-white to-gray-50 text-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            Kategori Tulisan
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Setiap kata punya rumahnya ✨  
            Di Xaviala, setiap tulisan ibarat secangkir hangat yang siap menemani soremu ☕  
            Jelajahi rumah kata ini, tempat imajinasi, cerita, dan rasa bertemu dengan kehangatan.
          </p>
        </div>

        {/* Grid Card */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`
                group p-8 rounded-2xl shadow-md border border-gray-200 bg-white 
                hover:shadow-xl hover:-translate-y-2 transition-all duration-300
                hover:border-${cat.color}-300 hover:bg-${cat.color}-50
              `}
            >
              <h2 className="text-2xl font-semibold mb-2 text-gray-900 group-hover:text-gray-800">
                {cat.name}
              </h2>
              <p className="text-base text-gray-600 mb-4">{cat.desc}</p>
              <span
                className={`
                  inline-block text-sm font-medium px-3 py-1 rounded-full
                  bg-gray-100 text-gray-600 border border-gray-300
                  group-hover:bg-${cat.color}-100 group-hover:text-${cat.color}-700 group-hover:border-${cat.color}-300
                `}
              >
                {cat.count} tulisan
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}