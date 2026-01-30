"use client";

import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { useCart } from "@/store/cart";
import Image from "next/image";
import { useState } from "react";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart, getTotalPrice } = useCart();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cartItems.map((item) => ({
            id: item.product.id,
            quantity: item.quantity,
          })),
        }),
      });
      if (!res.ok) throw new Error("Checkout session creation failed");
      const data = await res.json();
      window.location.href = data.url;
    } catch (error) {
      console.error(error);
      alert("Failed to start checkout.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-narrow py-8 sm:py-10 lg:py-12">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        Cart
      </h1>
      {cartItems.length === 0 ? (
        <div className="mt-10 rounded-xl border border-border bg-card p-8 text-center sm:p-12">
          <p className="text-muted-foreground">Your cart is empty.</p>
          <Button asChild variant="outline" className="mt-6">
            <Link href="/">View products</Link>
          </Button>
        </div>
      ) : (
        <>
          <ul className="mt-8 space-y-4 sm:mt-10 sm:space-y-6" role="list">
            {cartItems.map((item) => (
              <li
                key={item.product.id}
                className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 shadow-sm sm:flex-row sm:items-center sm:gap-6 sm:p-5"
              >
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-muted sm:h-28 sm:w-28">
                  <Image
                    src={item.product.image.url}
                    alt={item.product.image.alt}
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="font-semibold text-foreground sm:text-lg">
                    {item.product.name}
                  </h2>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    €{item.product.price} × {item.quantity} = €
                    {item.product.price * item.quantity}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-2 text-destructive hover:bg-destructive/10 hover:text-destructive"
                    onClick={() => removeFromCart(item.product.id)}
                  >
                    Remove
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-2 border-t border-border pt-8 sm:mt-10">
            <p className="text-muted-foreground text-sm">
              Subtotal: €{getTotalPrice()} · Shipping (€30) will be added at
              checkout. We ship to Europe only.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <p className="text-lg font-semibold tabular-nums text-foreground">
                Total at checkout: €{getTotalPrice() + 30}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button
                  variant="outline"
                  onClick={clearCart}
                  className="order-2 sm:order-1"
                >
                  Clear cart
                </Button>
                <Button
                  onClick={handleCheckout}
                  disabled={loading}
                  className="order-1 sm:order-2"
                >
                  {loading ? (
                    <>
                      <Icon.spinner
                        className="h-4 w-4 animate-spin"
                        aria-hidden
                      />
                      Processing…
                    </>
                  ) : (
                    "Proceed to checkout"
                  )}
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
