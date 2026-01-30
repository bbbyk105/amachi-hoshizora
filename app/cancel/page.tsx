import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CancelPage() {
  return (
    <div className="container-narrow flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        Payment cancelled
      </h1>
      <p className="mt-3 text-muted-foreground">
        Your payment was cancelled or an error occurred.
      </p>
      <Button asChild variant="outline" className="mt-8">
        <Link href="/cart">Back to cart</Link>
      </Button>
    </div>
  );
}
