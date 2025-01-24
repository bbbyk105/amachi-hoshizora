"use client";

import Link from "next/link";
import { useCart } from "@/store/cart";

export function Header() {
  const { getTotalQuantity } = useCart();

  return (
    <header className="w-full p-4 shadow">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          shopping
        </Link>
        <Link href="/cart" className="relative">
          <span>Cart</span>
          {/* カートに入っている個数をバッジ表示 */}
          {getTotalQuantity() > 0 && (
            <span className="absolute top-[-8px] right-[-10px] bg-red-500 text-white text-xs rounded-full px-2">
              {getTotalQuantity()}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
