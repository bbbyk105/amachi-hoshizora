"use client";

import Image from "next/image";
import { Product } from "@/types/products";
import { useCart } from "@/store/cart";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Icon } from "./Icon";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      addToCart(product, 1);
      toast({
        title: "Added to cart",
        description: `Added 1 × "${product.name}" to your cart.`,
        duration: 2000,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className="flex flex-1 flex-col">
        <div
          className="relative w-full overflow-hidden bg-muted"
          style={{ aspectRatio: "1 / 1" }}
        >
          <Image
            src={product.image.url}
            alt={product.image.alt}
            width={product.image.width}
            height={product.image.height}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <h2 className="text-base font-semibold leading-tight tracking-tight text-card-foreground sm:text-lg">
            {product.name}
          </h2>
          <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
            {product.description}
          </p>
          <div className="mt-4 flex flex-1 items-end justify-between gap-3">
            <span className="text-lg font-semibold tabular-nums text-foreground">
              €{product.price}
            </span>
            <Button
              size="sm"
              onClick={handleAddToCart}
              disabled={isLoading}
              className="shrink-0"
            >
              {isLoading ? (
                <Icon.spinner className="h-4 w-4 animate-spin" aria-hidden />
              ) : (
                "Add to cart"
              )}
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
