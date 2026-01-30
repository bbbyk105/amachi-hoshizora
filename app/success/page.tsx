"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCart } from "@/store/cart";
import { useEffect, useRef } from "react";

export default function SuccessPage() {
  const { clearCart } = useCart();
  const cleared = useRef(false);

  useEffect(() => {
    if (cleared.current) return;
    clearCart();
    cleared.current = true;
  }, [clearCart]);

  return (
    <div className="container-narrow flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        Thank you for your purchase
      </h1>
      <p className="mt-3 text-muted-foreground">
        Your payment was successful. A confirmation email has been sent to you
        from Stripe.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
        <Button asChild>
          <Link href="/">Back to products</Link>
        </Button>
      </div>
    </div>
  );
}
