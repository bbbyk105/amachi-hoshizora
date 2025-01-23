"use client";

import { Product } from "@/types/products";
import { ProductCard } from "./ProductCard";

interface ProductListProps {
  products: Product[];
  onBuy: (productId: number) => void;
}

export function ProductList({ products, onBuy }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onBuy={onBuy} />
      ))}
    </div>
  );
}
