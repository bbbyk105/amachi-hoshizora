export const metadata = {
  title: "Privacy Policy | AMACHI HOSHISORA EUR",
  description:
    "Privacy policy for AMACHI HOSHISORA EUR — how we collect and use your data.",
};

export default function PrivacyPage() {
  return (
    <div className="container-narrow py-10 sm:py-12 lg:py-16">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        This policy describes how we collect, use, and protect your personal
        information when you use our store.
      </p>

      <div className="mt-10 space-y-8 text-sm">
        <section>
          <h2 className="font-semibold text-foreground">
            1. Information We Collect
          </h2>
          <p className="mt-2 text-muted-foreground">
            When you place an order, we receive and process information
            necessary to fulfil your purchase, including: name, email address,
            shipping address, and payment-related data. Payment details are
            processed directly by Stripe; we do not store full card numbers on
            our servers.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            2. How We Use Your Information
          </h2>
          <p className="mt-2 text-muted-foreground">
            We use your information to process orders, ship products,
            communicate with you about your order, and comply with legal
            obligations. We may use your email to send order confirmations and,
            if you have opted in, marketing communications.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            3. Third-Party Services
          </h2>
          <p className="mt-2 text-muted-foreground">
            We use Stripe for payment processing. Stripe’s privacy policy
            applies to payment data:{" "}
            <a
              href="https://stripe.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:no-underline"
            >
              stripe.com/privacy
            </a>
            . Our site may be hosted on Vercel or similar providers; their
            privacy practices apply to hosting and analytics where relevant.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">4. Data Retention</h2>
          <p className="mt-2 text-muted-foreground">
            We retain order and contact information for as long as necessary to
            fulfil orders, handle returns, and comply with tax and legal
            requirements. You may request deletion of your personal data by
            contacting us, subject to applicable law.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">5. Your Rights</h2>
          <p className="mt-2 text-muted-foreground">
            Depending on your location (e.g. EU/EEA), you may have rights to
            access, correct, delete, or restrict processing of your personal
            data, and to data portability. To exercise these rights, contact us
            at amachihosisora@gmail.com.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">6. Security</h2>
          <p className="mt-2 text-muted-foreground">
            We take reasonable measures to protect your data using secure
            connections (HTTPS) and by relying on reputable payment and hosting
            providers. No method of transmission over the internet is 100%
            secure; we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">7. Changes</h2>
          <p className="mt-2 text-muted-foreground">
            We may update this Privacy Policy from time to time. The “Last
            updated” date at the bottom of this page will be revised when
            changes are made. Continued use of the site after changes
            constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">8. Contact</h2>
          <p className="mt-2 text-muted-foreground">
            For privacy-related questions or requests, please contact us at
            amachihosisora@gmail.com.
          </p>
        </section>
      </div>

      <p className="mt-10 text-xs text-muted-foreground">
        Last updated: {new Date().toISOString().split("T")[0]}
      </p>
    </div>
  );
}
