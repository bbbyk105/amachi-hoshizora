"use client";

import Link from "next/link";
import { useCart } from "@/store/cart";
import { ShoppingCart } from "lucide-react";

export function Header() {
  const { getTotalQuantity } = useCart();

  return (
    <header
      className="sticky top-0 z-[2000] h-[var(--header-height)] border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
      role="banner"
    >
      <div className="mx-auto flex h-full max-w-[var(--content-max-width)] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          AMACHI HOSHISORA EUR
        </Link>
        <nav className="flex items-center gap-6" aria-label="Main navigation">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Products
          </Link>
          <Link
            href="/cart"
            className="relative flex items-center justify-center rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`View cart (${getTotalQuantity()} items)`}
          >
            <ShoppingCart className="h-5 w-5 sm:h-5 sm:w-5" strokeWidth={1.5} />
            {getTotalQuantity() > 0 && (
              <span
                className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-xs font-medium text-primary-foreground"
                aria-hidden
              >
                {getTotalQuantity()}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
