"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
  orientation = "horizontal", // default
}) => {
  return (
    <>
      <FloatingDockDesktop
        items={items}
        className={desktopClassName}
        orientation={orientation}
      />
      <FloatingDockMobile items={items} className={mobileClassName} orientation={orientation} />
    </>
  );
};

// Mobile Views
const FloatingDockMobile = ({ items, className }) => {
  let mouseX = useMotionValue(Infinity);
  let mouseY = useMotionValue(Infinity);

  const [inHero, setInHero] = useState(true); // default di hero
  const [isLandscape, setIsLandscape] = useState(false); // detect orientasi

  useEffect(() => {
    // === detect orientation ===
    const checkOrientation = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    checkOrientation();
    window.addEventListener("resize", checkOrientation);

    return () => window.removeEventListener("resize", checkOrientation);
  }, []);

  useEffect(() => {
    // === observer hero ===
    const heroEl = document.querySelector("#hero");
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInHero(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
      onMouseLeave={() => {
        mouseX.set(Infinity);
        mouseY.set(Infinity);
      }}
      className={cn(
        "fixed z-50 md:hidden bg-white/10 backdrop-blur-md border border-neutral-200/50 dark:border-white/10 shadow-lg rounded-2xl p-2 transition-all duration-500 ease-in-out",

        inHero
          ? isLandscape
            ? "left-1/2 -translate-x-1/2 flex flex-row gap-2" // landscape + hero
            : "left-1/2 -translate-x-1/2 flex flex-row gap-2" // portrait + hero
          : isLandscape
            ? "right-4 top-1/2 -translate-y-[45%] flex flex-col gap-3" // landscape + scroll
            : "right-4 bottom-8 flex flex-col gap-3" // portrait + scroll
      )}
    >
      {items.map((item) => (
        <IconContainer
          key={item.title}
          mouseX={mouseX}
          mouseY={mouseY}
          orientation={inHero ? "horizontal" : "vertical"}
          isMobile
          {...item}
        />
      ))}
    </motion.div>
  );
};

// Dekstop Views
const FloatingDockDesktop = ({ items, className, orientation }) => {
  let mouseX = useMotionValue(Infinity);
  let mouseY = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
      onMouseLeave={() =>{
        mouseX.set(Infinity);
        mouseY.set(Infinity);
      }}
      className={cn(
        "hidden md:flex bg-white/10 backdrop-blur-md border border-neutral-200/50 dark:border-white/10 shadow-lg rounded-2xl p-2",
        orientation === "vertical"
          ? "flex-col h-auto w-16 items-center gap-4"
          : "flex-row h-16 items-end gap-4 px-4 pb-3",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer
          mouseX={mouseX}
          mouseY={mouseY}
          key={item.title}
          orientation={orientation}
          {...item}
        />
      ))}
    </motion.div>
  );
};

// Logic Icons
function IconContainer({
  mouseX,
  mouseY,
  title,
  icon,
  href,
  orientation="horizontal",
  isMobile = false,
}) {
  let ref = useRef(null);

  // ukuran dibedakan
  let baseSize = isMobile ? 28 : 40;
  let hoverSize = isMobile ? 44 : 80;
  let baseIcon = isMobile ? 14 : 20;
  let hoverIcon = isMobile ? 24 : 40;

  let distance = useTransform(
    orientation === "vertical" ? mouseY : mouseX,
    (val) => {
      let bounds = ref.current?.getBoundingClientRect() ?? {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      };

      return orientation === "vertical"
        ? val - (bounds.y + bounds.height / 2)
        : val - (bounds.x + bounds.width / 2);
    }
  );

  let widthTransform = useTransform(distance, [-150, 0, 150], [baseSize, hoverSize, baseSize]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [baseSize, hoverSize, baseSize]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [baseIcon, hoverIcon, baseIcon]);
  let heightTransformIcon = useTransform(distance, [-150, 0, 150], [baseIcon, hoverIcon, baseIcon]);

  let width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  let height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });

  let widthIcon = useSpring(widthTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });
  let heightIcon = useSpring(heightTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center 
                   rounded-full bg-white/20 backdrop-blur-md border border-neutral-200/50 
                   dark:border-white/10 shadow-lg text-neutral-800 dark:text-white"
      >
        <AnimatePresence>
          {!isMobile && hovered && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className={`absolute text-xs px-2 py-1 rounded-md bg-black/60 text-white shadow-md whitespace-pre
                ${
                  orientation === "vertical"
                    ? "left-[-12px] top-1/2 -translate-y-1/2 -translate-x-full mr-2"
                    : "-top-4 left-1/2 -translate-x-1/2"
                }`}
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
