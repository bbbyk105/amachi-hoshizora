import products from "@/data/products";
import { ProductList } from "@/components/ProductList";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-border/80 bg-muted/30">
        <div className="container-narrow py-12 sm:py-16 lg:py-20">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            AMACHI HOSHISORA EUR
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Japanese sake brewed at the foot of Mt. Fuji.
            <br />
            European store — all prices in EUR.
          </p>
        </div>
      </section>
      <section
        className="container-narrow py-10 sm:py-12 lg:py-16"
        aria-labelledby="products-heading"
      >
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>
        <ProductList products={products} />
      </section>
    </>
  );
}
