"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const [displayedPath, setDisplayedPath] = useState(pathname);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (pathname !== displayedPath) {
      setShouldRender(false); // Start exit
      const timeout = setTimeout(() => {
        setDisplayedPath(pathname); // Update to new route
        setShouldRender(true); // Now render the new route
      }, 400); // match `exit` duration

      return () => clearTimeout(timeout);
    }
  }, [pathname, displayedPath]);

  return (
    <AnimatePresence mode="wait">
      {shouldRender && (
        <motion.div
          key={displayedPath}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
