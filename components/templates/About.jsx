import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function About() {
  return (
    <section className="bg-white text-gray-800 min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h1
            className={`${playfair.className} text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8`}
          >
            Tentang <span className="text-gray-500">Xaviala</span>
          </h1>
        </div>

        <div className={`${inter.className} space-y-6 text-lg leading-relaxed font-light`}>
          <p>
            <span className="font-medium">Xaviala</span>, atau yang lebih akrab disapa 
            <span className="italic"> Alaa</span>, memiliki nama asli 
            <span className="font-medium"> Laula Khairun Nisa</span>. Ia adalah seorang penulis 
            yang menemukan cara merangkai kata menjadi tempat bernaung — baik bagi dirinya sendiri, 
            maupun bagi siapa saja yang singgah membaca.
          </p>

          <p>
            Menulis baginya adalah cara sederhana untuk meromantisasi hidup yang kadang terasa biasa saja. 
            Dari situ, lahirlah cerita-cerita hangat, jujur, dan penuh warna yang ia tuangkan dalam setiap tulisannya.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 text-base">
            “Hai! Aku Ala.  
            Tidak ada yang menarik dari hidupku. Em, ya. Begitulah blog ini hadir,  
            sebagai salah satu caraku meromantisasi kehidupan yang biasa saja.”
            <br />
            — <span className="text-gray-500">Maret 31, 2019</span>
          </blockquote>

          <p>
            Dari setiap kata, Xaviala berharap bisa mengajakmu berhenti sejenak, menarik napas, 
            dan menemukan hangatnya cerita dalam hal-hal sederhana.
          </p>
        </div>
      </div>
    </section>
  );
}
