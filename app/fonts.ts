import localFont from "next/font/local";

// AlexBrush (single regular)
export const alexBrush = localFont({
  src: "../public/assets/font/AlexBrush-Regular.ttf",
  display: "swap",
  variable: "--font-alexbrush",
});

// Montserrat (pakai variable font lebih efisien)
export const montserrat = localFont({
  src: [
    {
      path: "../public/assets/font/Montserrat/Montserrat-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../public/assets/font/Montserrat/Montserrat-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-montserrat",
});

// Poppins (pakai regular biar ringan, bisa ditambah kalau mau all weights)
export const poppins = localFont({
  src: "../public/assets/font/Poppins/Poppins-Regular.ttf",
  display: "swap",
  variable: "--font-poppins",
});
