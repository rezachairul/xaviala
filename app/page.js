// Page Utama

// Menu
import {Navbar} from "@/components/templates/Navbar";

// Pages
import Hero from "@/components/templates/Hero";
import Category from "@/components/templates/Category";
import Explore from "@/components/templates/Explore";
import About from "@/components/templates/About";
import Contact from "@/components/templates/Contact";

//
export default function Home() {
  return (
    <>

      {/* Menu */}
      <Navbar />

      {/* Pages Section */}
      <Hero />
      <Category />
      <Explore />
      <About />
      <Contact />
    </>
  );
}
