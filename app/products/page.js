import ProductsClient from "./ProductsClient";

export default async function ProductsPage() {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
  });

  const data = await res.json();

  return <ProductsClient products={data.products} />;
}