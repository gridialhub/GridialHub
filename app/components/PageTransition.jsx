"use client";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  // Esto remonta la animación cada vez que cambias de página
  return (
    <div key={pathname} className="page-fade">
      {children}
    </div>
  );
}

