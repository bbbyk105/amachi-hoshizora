import products from "@/data/products";
import { ProductList } from "@/components/ProductList";

export default function HomePage() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>
      <ProductList products={products} />
    </>
  );
}
