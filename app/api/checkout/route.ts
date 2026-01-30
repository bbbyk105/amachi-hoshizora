import { NextResponse } from "next/server";
import Stripe from "stripe";
import products from "@/data/products";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {});

// European countries only (EU, EEA, UK, CH, etc.) — ISO 3166-1 alpha-2
const EUROPEAN_COUNTRIES: Stripe.Checkout.SessionCreateParams.ShippingAddressCollection.AllowedCountry[] =
  [
    "AT",
    "BE",
    "BG",
    "HR",
    "CY",
    "CZ",
    "DK",
    "EE",
    "FI",
    "FR",
    "DE",
    "GR",
    "HU",
    "IE",
    "IT",
    "LV",
    "LT",
    "LU",
    "MT",
    "NL",
    "PL",
    "PT",
    "RO",
    "SK",
    "SI",
    "ES",
    "SE",
    "GB",
    "NO",
    "CH",
    "IS",
    "LI",
    "MC",
  ];

export async function POST(request: Request) {
  try {
    const { items }: { items: Array<{ id: number; quantity: number }> } =
      await request.json();

    const lineItems = items.map((item) => {
      const product = products.find((p) => p.id === item.id);
      if (!product) {
        throw new Error(`Invalid product ID: ${item.id}`);
      }
      return {
        price_data: {
          currency: "eur",
          product_data: {
            name: product.name,
            description: product.description,
          },
          unit_amount: product.price * 100,
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      locale: "en",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL ?? "https://amachi-hoshizora.vercel.app"}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL ?? "https://amachi-hoshizora.vercel.app"}/cancel`,
      // Collect shipping address (required for delivery)
      shipping_address_collection: {
        allowed_countries: [...EUROPEAN_COUNTRIES],
      },
      // Fixed 30 EUR shipping for Europe
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 3000, // 30 EUR in cents
              currency: "eur",
            },
            display_name: "Standard Shipping (Europe)",
            delivery_estimate: {
              minimum: { unit: "business_day", value: 5 },
              maximum: { unit: "business_day", value: 14 },
            },
          },
        },
      ],
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
