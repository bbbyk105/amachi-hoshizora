import products from "@/data/products";
import { ProductList } from "@/components/ProductList";

export default function HomePage() {
  return (
    <>
      <ProductList products={products} />
    </>
  );
}
