export default function Explore() {
  return (
    <section className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-4">Jelajahi Karya</h1>
      <p className="text-gray-700 mb-6">
        Berikut adalah karya-karya terbaru dari para kreator di Xaviala. 
        Nantinya, bagian ini akan berisi daftar konten atau postingan.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Dummy Card */}
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Karya Dummy 1</h2>
          <p className="text-gray-600">Deskripsi singkat karya dummy pertama.</p>
        </div>
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Karya Dummy 2</h2>
          <p className="text-gray-600">Deskripsi singkat karya dummy kedua.</p>
        </div>
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Karya Dummy 3</h2>
          <p className="text-gray-600">Deskripsi singkat karya dummy ketiga.</p>
        </div>
      </div>
    </section>
  );
}
