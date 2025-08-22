"use client";

import React, { useEffect, useState } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconBook,
  IconCompassFilled,
  IconInfoCircle,
  IconAddressBook,
} from "@tabler/icons-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-gray-600" />,
      href: "#hero",
    },
    {
      title: "Category",
      icon: <IconBook className="h-full w-full text-gray-600" />,
      href: "#category",
    },
    {
      title: "Explore",
      icon: <IconCompassFilled className="h-full w-full text-gray-600" />,
      href: "#explore",
    },
    {
      title: "About",
      icon: <IconInfoCircle className="h-full w-full text-gray-600" />,
      href: "#about",
    },
    {
      title: "Contact",
      icon: <IconAddressBook className="h-full w-full text-gray-600" />,
      href: "#contact",
    },
  ];

  return (
    <div
        className={`fixed z-50 transition-all duration-500 ${
            isScrolled
            ? "right-6 top-1/2 -translate-y-1/2" // floating kanan
            : "top-10 left-1/2 -translate-x-1/2" // lebih turun dikit
        }`}
    >
      <FloatingDock
        mobileClassName="translate-y-20"
        desktopClassName="backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-2xl p-2"
        items={links}
        orientation={isScrolled ? "vertical" : "horizontal"} // kasih arah
      />
    </div>
  );
}
