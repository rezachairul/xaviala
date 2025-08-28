// Page Utama

// Menu
import {Navbar} from "@/components/templates/Navbar";

// Pages
import Hero from "@/components/templates/Hero";
import Explore from "@/components/templates/Explore";
import Footer from "@/components/templates/Footer";

import About from "@/components/templates/About";
import Contact from "@/components/templates/Contact";
import Category from "@/components/templates/Category";


//
export default function Home() {
  return (
    <>

      {/* Menu */}
      <Navbar />

      {/* Pages Section */}
      <Hero />
      <Explore />
      <Footer />
    </>
  );
}
