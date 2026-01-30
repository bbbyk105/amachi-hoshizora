export const metadata = {
  title: "Terms of Service | AMACHI HOSHISORA EUR",
  description: "Terms of service for AMACHI HOSHISORA EUR online store.",
};

export default function TermsPage() {
  return (
    <div className="container-narrow py-10 sm:py-12 lg:py-16">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        By using this website and placing orders, you agree to these terms.
        Please read them carefully.
      </p>

      <div className="mt-10 space-y-8 text-sm">
        <section>
          <h2 className="font-semibold text-foreground">
            1. Acceptance of Terms
          </h2>
          <p className="mt-2 text-muted-foreground">
            By accessing or using the AMACHI HOSHISORA EUR website and services,
            you agree to be bound by these Terms of Service and our Privacy
            Policy. If you do not agree, please do not use this site.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            2. Products and Orders
          </h2>
          <p className="mt-2 text-muted-foreground">
            We sell Japanese sake and related products. All prices are in EUR.
            We reserve the right to limit quantities, correct errors, and
            discontinue products. By placing an order, you represent that you
            are of legal age to purchase alcohol in your country and that the
            shipping address is in a region we serve (Europe).
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            3. Payment and Pricing
          </h2>
          <p className="mt-2 text-muted-foreground">
            Payment is processed via Stripe. You agree to provide accurate
            payment information. Shipping costs (€30 for European delivery) are
            added at checkout. Prices and availability are subject to change
            without notice; the price at the time of order confirmation applies.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            4. Shipping and Delivery
          </h2>
          <p className="mt-2 text-muted-foreground">
            We ship only to European countries. You are responsible for
            providing a correct shipping address. Delivery times are estimates;
            we are not liable for delays caused by carriers or customs. Risk of
            loss passes to you upon delivery to the carrier.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            5. Returns and Refunds
          </h2>
          <h3 className="mt-4 font-medium text-foreground">
            Conditions for accepting returns
          </h3>
          <p className="mt-2 text-muted-foreground">
            We accept returns for items that are unopened and unused, provided
            you contact us by phone or other means within 7 days of delivery and
            we have confirmed the product. For consultations regarding adverse
            effects of pharmaceuticals or similar matters, please contact us by
            phone to arrange return shipping (within 7 days of delivery).
          </p>
          <h3 className="mt-4 font-medium text-foreground">
            Return shipping and handling costs
          </h3>
          <p className="mt-2 text-muted-foreground">
            For initial defects, we will bear the return shipping and handling
            costs. For returns at the customer’s convenience (e.g. wrong order,
            no longer needed), the customer is responsible for return shipping
            and handling fees. For orders where we paid the outbound shipping,
            we ask the customer to bear the cost of return shipping even when
            the original delivery included free or fixed shipping.
          </p>
          <h3 className="mt-4 font-medium text-foreground">Return contact</h3>
          <p className="mt-2 text-muted-foreground">
            Phone: 0544-23-0880 (from abroad: +81 544-23-0880)
            <br />
            Email: amachihosisora@gmail.com
            <br />
            Return address: 〒417-0051 静岡県富士市吉原２丁目８−２１ (Yoshihara
            2-8-21, Fuji City, Shizuoka 417-0051, Japan)
            <br />
            Contact person: Hirohito Kondo
          </p>
          <p className="mt-4 text-muted-foreground">
            Refunds will be issued in accordance with applicable law and our
            Legal Notice.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            6. Prohibited Conduct
          </h2>
          <p className="mt-2 text-muted-foreground">
            You may not use this site for any unlawful purpose, to misrepresent
            your identity or age, to resell products in violation of applicable
            law, or to interfere with the site’s operation or security. We may
            refuse or cancel orders at our discretion.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            7. Intellectual Property
          </h2>
          <p className="mt-2 text-muted-foreground">
            All content on this site (text, images, logos, design) is owned by
            AMACHI HOSHISORA EUR or its licensors and is protected by copyright
            and other intellectual property laws. You may not copy, modify, or
            use our content without permission.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            8. Limitation of Liability
          </h2>
          <p className="mt-2 text-muted-foreground">
            To the fullest extent permitted by law, we are not liable for any
            indirect, incidental, or consequential damages arising from your use
            of the site or products. Our total liability for any claim shall not
            exceed the amount you paid for the order in question.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">9. Governing Law</h2>
          <p className="mt-2 text-muted-foreground">
            These terms are governed by the laws of Japan. Any disputes shall be
            subject to the exclusive jurisdiction of the courts of Japan (e.g.
            the Shizuoka District Court as the court of first instance).
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">10. Changes</h2>
          <p className="mt-2 text-muted-foreground">
            We may update these Terms of Service at any time. The “Last updated”
            date below will be revised when changes are made. Your continued use
            of the site after changes constitutes acceptance of the updated
            terms.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">11. Contact</h2>
          <p className="mt-2 text-muted-foreground">
            For questions about these terms, please contact us at
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
