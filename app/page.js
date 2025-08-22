// Page Utama

// Menu
import {Navbar} from "@/components/templates/Navbar";

// Pages
import Hero from "@/components/templates/Hero";
import About from "@/components/templates/About";
import Explore from "@/components/templates/Explore";

//
export default function Home() {
  return (
    <>

      {/* Menu */}
      <Navbar />

      {/* Pages Section */}
      <Hero />
      <Explore />
      <About />
    </>
  );
}
