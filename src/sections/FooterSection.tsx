import React from "react";

export function FooterSection() {
  return (
    <footer className="text-center py-6 text-sm bg-[--card] text-[--card-foreground]">
      &copy; {new Date().getFullYear()} Club Jiu-Jitsu. Todos los derechos reservados.
    </footer>
  );
}
  