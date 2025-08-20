import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 p-8">
      {/* Logo Xaviala */}
      <Image
        src="/assets/img/xaviala-logo.svg"
        alt="Xaviala Logo"
        width={120}
        height={120}
        className="rounded-full mb-6"
        priority
      />

      {/* Judul & Deskripsi */}
      <h1 className="text-4xl font-bold tracking-wide mb-4">Xaviala</h1>
      <p className="max-w-2xl text-center text-lg leading-relaxed text-gray-600">
        Platform karya tulis multi-genre dengan nuansa monokrom elegan. 
        Di sini, tulisan bertemu dengan pembaca dalam pengalaman yang interaktif 
        – mulai dari membaca, memberi komentar, hingga menikmati nuansa emosional 
        dari setiap karya.
      </p>

      {/* Tombol Navigasi */}
      <div className="flex gap-4 mt-8">
        <a
          href="/explore"
          className="px-6 py-3 border border-gray-800 text-gray-800 hover:bg-gray-100 transition rounded-full"
        >
          Jelajahi Karya
        </a>
        <a
          href="/about"
          className="px-6 py-3 border border-gray-400 text-gray-500 hover:bg-gray-50 transition rounded-full"
        >
          Tentang Xaviala
        </a>
      </div>
    </div>
  );
}
