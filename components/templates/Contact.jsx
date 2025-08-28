import { 
  IconMail, 
  IconBrandInstagram, 
  IconBrandLinkedin
} from "@tabler/icons-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen py-20 bg-gradient-to-b from-white to-rose-50 text-gray-800"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-sm">
          Yok Keep in Touch 👋
        </h1>

        {/* Quote */}
        <p className="text-lg italic text-gray-600 mb-6">
          "Nulis itu kayak ngobrol sama dunia,  
          bedanya nggak ada tombol mute." ✍️
        </p>

        {/* Description */}
        <p className="text-gray-700 mb-10 leading-relaxed">
          Mau ngobrol soal tulisan, ide random, atau sekadar nyapa?  
          Santai aja, DM atau email aku kapanpun ✨
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-8 text-2xl">
          <a
            href="mailto:laulakn@gmail.com"
            className="text-gray-700 hover:text-rose-600 transition"
          >
            <IconMail size={32} />
          </a>
          <a
            href="https://www.instagram.com/laulakn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800 transition"
          >
            <IconBrandInstagram size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/laulakn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition"
          >
            <IconBrandLinkedin size={32} />
          </a>
        </div>

        {/* Footer text */}
        <p className="mt-10 text-sm text-gray-500">
          🚀 Jangan sungkan buat sapa duluan, siapa tahu dari obrolan kecil lahir ide besar 🌱
        </p>
      </div>
    </section>
  );
}