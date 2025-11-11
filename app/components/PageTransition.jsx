"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [exiting, setExiting] = useState(false);

  // Al llegar a una nueva ruta, volvemos a estado "no saliendo"
  useEffect(() => {
    setExiting(false);
  }, [pathname]);

  // Intercepta clics en enlaces internos para animar salida
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest("a");
      if (!a) return;

      // Ignorar enlaces con target _blank, modificadores, download, o externos
      const newTab = a.target === "_blank" || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey;
      if (newTab || a.hasAttribute("download")) return;

      const url = new URL(a.href, location.href);
      const isInternal = url.origin === location.origin;
      if (!isInternal) return;

      // Evitar recargar misma ruta
      const nextPath = url.pathname + url.search + url.hash;
      const currentPath = location.pathname + location.search + location.hash;
      if (nextPath === currentPath) return;

      // Animación de salida y luego navegamos
      e.preventDefault();
      setExiting(true);
      // Duración debe sincronizar con @keyframes pageFadeOut (CSS)
      setTimeout(() => router.push(nextPath), 250);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [router]);

  return (
    <div key={pathname} className={`page-fade${exiting ? " exit" : ""}`}>
      {children}
    </div>
  );
}
