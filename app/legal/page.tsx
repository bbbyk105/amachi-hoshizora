export const metadata = {
  title: "Legal Notice | AMACHI HOSHISORA EUR",
  description:
    "Specified Commercial Transaction Act — seller information and legal notice.",
};

export default function LegalPage() {
  return (
    <div className="container-narrow py-10 sm:py-12 lg:py-16">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Legal Notice
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Specified Commercial Transaction Act (Act on Specified Commercial
        Transactions) — Seller information
      </p>

      <div className="mt-10 space-y-8 text-sm">
        <section>
          <h2 className="font-semibold text-foreground">
            Seller / Business Operator（販売業者）
          </h2>
          <p className="mt-2 text-muted-foreground">
            Kondo Pharmacy Co., Ltd.
            <br />
            株式会社近藤薬局
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            Operating Manager / Representative（運営統括責任者）
          </h2>
          <p className="mt-2 text-muted-foreground">
            Hirohito Kondo（近藤弘人）
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">Address（所在地）</h2>
          <p className="mt-2 text-muted-foreground">
            〒417-0051 静岡県富士市吉原２丁目８−２１
            <br />
            Yoshihara 2-8-21, Fuji City, Shizuoka 417-0051, Japan
            <br />
            TEL. 0545-52-0011（from abroad: +81 545-52-0011）
            <br />
            Email: amachihosisora@gmail.com
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            Prices and Payment（お支払方法）
          </h2>
          <p className="mt-2 text-muted-foreground">
            All prices are displayed in EUR (€). Payment is by online credit
            card (SSL) and processed securely via Stripe. Shipping costs (€30
            for Europe) are added at checkout.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            Delivery / Order Fulfilment（販売数量）
          </h2>
          <p className="mt-2 text-muted-foreground">
            We ship to European countries only. For orders of in-stock items, we
            aim to ship within 3 business days (excluding weekends and
            holidays). Delivery typically takes 5–14 business days after
            dispatch. The customer is responsible for providing a valid shipping
            address.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            Defective Goods（不良品）
          </h2>
          <p className="mt-2 text-muted-foreground">
            If you receive a product with an initial defect that occurred within
            7 days of the delivery date, we will arrange an exchange or repair.
            Please contact us as soon as possible.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            Return Period（返品期限）
          </h2>
          <p className="mt-2 text-muted-foreground">
            If you are not satisfied with your purchase, you may return unopened
            items in their original packaging within 7 days of the delivery
            date. Returns must be sent back to us at the customer’s expense. For
            items that included free or fixed shipping, the customer is
            responsible for the cost of return shipping. Please contact us
            before returning.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            Return Shipping（返品送料）
          </h2>
          <p className="mt-2 text-muted-foreground">
            Except in the case of defective or damaged goods, return shipping
            costs are the responsibility of the customer.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-foreground">
            Complaints and Inquiries
          </h2>
          <p className="mt-2 text-muted-foreground">
            For complaints, disputes, or any inquiries, please contact us at
            amachihosisora@gmail.com or at the address or telephone number
            above. We will respond as promptly as possible.
          </p>
        </section>
      </div>

      <p className="mt-10 text-xs text-muted-foreground">
        Last updated: {new Date().toISOString().split("T")[0]}
      </p>
    </div>
  );
}
