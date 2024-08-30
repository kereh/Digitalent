import { products } from "@/lib/products";

import ProductCard from "@/app/_components/products/card";

export default function Page() {
  return (
    <div className="mb-10 w-full pt-16">
      <div className="my-10">
        <h1 className="upper text-3xl font-semibold">Product</h1>
        <p className="text-muted-foreground">
          Explore products from around the world
        </p>
      </div>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
        {products.map((product, i) => (
          <ProductCard
            key={i}
            gambar={product.gambar}
            nama={product.nama}
            desk={product.desk}
            harga={product.harga}
          />
        ))}
      </div>
    </div>
  );
}
