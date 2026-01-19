"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <div className="main-container inner">
        <Link href="/" className="flex items-center gap-2">
          <Image src="logo.svg" alt="Logo" width={42} height={40} />
          <span className="font-extrabold">Coins</span>
        </Link>

        <nav>
          <Link
            href="/"
            className={cn("nav-link", {
              "is-active": pathname === "/",
              "is-home": true,
            })}
          >
            Home
          </Link>

          <p>Seach Modal</p>

          <Link href="/coins">All coins</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
