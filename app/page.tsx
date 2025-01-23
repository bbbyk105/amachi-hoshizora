import products from "@/data/products";
import { ProductList } from "@/components/ProductList";

export default function HomePage() {
  // 「Buy Now」ボタン押下時のハンドラ
  const handleBuy = async (productId: number) => {
    // Stripe Checkout セッションを作成するAPIを叩く
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      if (!res.ok) {
        throw new Error("Failed to create checkout session.");
      }

      const data = await res.json();
      if (data.url) {
        // Stripe の Checkout ページへリダイレクト
        window.location.href = data.url;
      }
    } catch (error) {
      console.error(error);
      alert("Failed to initiate checkout.");
    }
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>
      <ProductList products={products} onBuy={handleBuy} />
    </main>
  );
}
