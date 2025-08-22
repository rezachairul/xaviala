export default function Category() {
  return (
    <section id="category" className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-4">Kategori</h1>
      <p className="text-gray-700 mb-6">
        Halaman ini akan menampilkan daftar kategori karya yang ada di Xaviala.
        Untuk sementara, berikut dummy kategori:
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Seni Visual</li>
        <li>Musik</li>
        <li>Tulisan Kreatif</li>
        <li>Fotografi</li>
        <li>Proyek Komunitas</li>
      </ul>
    </section>
  );
}
