import { 
  IconMail, 
  IconBrandInstagram, 
  IconBrandLinkedin, 
  IconBrandFacebook, 
  IconBrandYoutube 
} from "@tabler/icons-react";

export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto py-16 px-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Yok Keep in Touch 👋</h1>
      
      <p className="text-lg italic text-gray-600 mb-6">
        "Nulis itu kayak ngobrol sama dunia, bedanya ga ada tombol mute." ✍️
      </p>

      <p className="text-gray-700 mb-8">
        Pengen ngobrol soal tulisan, ide random, atau sekadar nyapa?  
        Santai aja, DM atau email aku kapanpun ✨
      </p>

      <div className="flex justify-center gap-6 text-2xl">
        <a
          href="mailto:username@email.com"
          className="text-gray-700 hover:text-gray-900 transition"
        >
          <IconMail size={28} />
        </a>
        <a
          href="https://instagram.com/username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:text-pink-800 transition"
        >
          <IconBrandInstagram size={28} />
        </a>
        <a
          href="https://linkedin.com/in/username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900 transition"
        >
          <IconBrandLinkedin size={28} />
        </a>
        <a
          href="https://facebook.com/username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition"
        >
          <IconBrandFacebook size={28} />
        </a>
        <a
          href="https://youtube.com/@username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:text-red-800 transition"
        >
          <IconBrandYoutube size={28} />
        </a>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        🚀 Let's connect, jangan sungkan buat sapa duluan.
      </p>
    </section>
  );
}
