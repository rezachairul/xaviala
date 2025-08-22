export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-4">Kontak Kami</h1>
      <p className="text-gray-700 mb-6">
        Punya pertanyaan, ide, atau sekadar ingin menyapa? 
        Silakan hubungi kami melalui form dummy berikut 😄
      </p>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-gray-800">Nama</label>
          <input
            type="text"
            className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
            placeholder="Masukkan nama kamu"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-800">Email</label>
          <input
            type="email"
            className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
            placeholder="Masukkan email kamu"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-800">Pesan</label>
          <textarea
            className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
            placeholder="Tulis pesan kamu..."
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Kirim Pesan
        </button>
      </form>
    </section>
  );
}
