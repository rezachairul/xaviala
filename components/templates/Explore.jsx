export default function Explore() {
  return (
    <section
      id="explore"
      className="min-h-screen flex flex-col items-center justify-center py-12 px-6 bg-white"
    >
      <h1 className="text-3xl font-bold mb-4 text-gray-900">Jelajahi Karya</h1>
      <p className="text-gray-700 mb-8">
        Kumpulan tulisan, catatan, dan karya random ala Xaviala. 
        Kadang serius, kadang ngalor-ngidul, tapi selalu dari hati.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-white">
          <span className="inline-block text-sm text-white bg-indigo-500 px-3 py-1 rounded-full mb-3">
            Puisi
          </span>
          <h2 className="text-xl font-semibold mb-2 text-gray-900">Karya Dummy 1</h2>
          <p className="text-gray-600 mb-4">
            Sepotong kata yang lahir di sela-sela senja, entah buat siapa, tapi tetap aku tulis.
          </p>
          <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">
            Selengkapnya →
          </a>
        </div>

        {/* Card 2 */}
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-white">
          <span className="inline-block text-sm text-white bg-pink-500 px-3 py-1 rounded-full mb-3">
            Cerita
          </span>
          <h2 className="text-xl font-semibold mb-2 text-gray-900">Karya Dummy 2</h2>
          <p className="text-gray-600 mb-4">
            Coretan singkat tentang perasaan yang nggak pernah sempat diucapkan langsung.
          </p>
          <a href="#" className="text-pink-600 hover:text-pink-800 font-medium">
            Selengkapnya →
          </a>
        </div>

        {/* Card 3 */}
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-white">
          <span className="inline-block text-sm text-white bg-green-500 px-3 py-1 rounded-full mb-3">
            Esai
          </span>
          <h2 className="text-xl font-semibold mb-2 text-gray-900">Karya Dummy 3</h2>
          <p className="text-gray-600 mb-4">
            Catatan iseng soal hidup, buku, dan obrolan random yang ternyata dalam juga.
          </p>
          <a href="#" className="text-green-600 hover:text-green-800 font-medium">
            Selengkapnya →
          </a>
        </div>
      </div>
    </section>
  );
}
