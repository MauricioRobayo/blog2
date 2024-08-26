"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  return (
    <footer className="flex flex-col border-t-2 border-slate-400 gap-8 py-8">
      {pathname === "/" ? null : (
        <p className="text-sm text-slate-400">
          The successful warrior is the average man with laser like focus.
        </p>
      )}
      <div className="flex gap-4">
        <Link href="https://www.github.com/mauriciorobayo">GitHub</Link>
        <Link href="https://www.linkedin.com/in/mauriciorobayo">LinkedIn</Link>
      </div>
    </footer>
  );
}
