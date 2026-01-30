import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-narrow flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 text-muted-foreground">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
