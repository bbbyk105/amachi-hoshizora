import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="mt-auto border-t border-border bg-muted/30"
      role="contentinfo"
    >
      <div className="container-narrow py-8 sm:py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AMACHI HOSHISORA EUR. All rights
            reserved.
          </p>
          <nav
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm"
            aria-label="Legal and policy links"
          >
            <Link
              href="/legal"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Legal Notice
            </Link>
            <Link
              href="/privacy"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
