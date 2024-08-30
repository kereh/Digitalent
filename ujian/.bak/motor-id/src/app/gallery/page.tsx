import { motor } from "~/lib/motor";
import GalleryCard from "~/app/_components/gallery-card";

export default function Page() {
  return (
    <div className="grid w-full place-content-center pt-20">
      <div className="text-center">
        <h1 className="text-xl font-semibold">Gallery</h1>
        <p className="text-muted-foreground">Gallery Company</p>
      </div>
      <div className="mt-10 grid grid-cols-1 place-content-center gap-20 md:grid-cols-3">
        {motor.map((m, i) => (
          <GalleryCard key={i} gambar={m.gambar} />
        ))}
      </div>
    </div>
  );
}
