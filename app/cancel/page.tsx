import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CancelPage() {
  return (
    <div className="container-narrow flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        Payment cancelled
      </h1>
      <p className="mt-3 text-muted-foreground">
        Your payment was cancelled or an error occurred. Your cart has been kept
        so you can try again or change your order.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
        <Button asChild>
          <Link href="/cart">Back to cart</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Continue shopping</Link>
        </Button>
      </div>
    </div>
  );
}
