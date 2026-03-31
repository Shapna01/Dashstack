import ProductStockClient from "./ProductStockClient"; 

export default async function ProductStock() {
  const res = await fetch("https://dummyjson.com/products", { cache: "no-store" });
  const data = await res.json();

  return <ProductStockClient products={data.products} />;
}