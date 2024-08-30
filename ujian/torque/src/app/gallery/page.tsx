import { products } from "@/lib/products";
import GalleryCard from "@/app/_components/gallery/card";

export default function Page() {
  return (
    <div className="mb-10 w-full pt-16">
      <div className="my-10">
        <h1 className="upper text-3xl font-semibold">Gallery</h1>
        <p className="text-muted-foreground">
          Explore products from around the world
        </p>
      </div>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
        {products.map((product, i) => (
          <GalleryCard
            key={i}
            gambar={product.gambar}
            nama={product.nama}
            desk={product.desk}
          />
        ))}
      </div>
    </div>
  );
}
