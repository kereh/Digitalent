import { brand } from "~/lib/brand";
import ClientCard from "~/app/_components/client-card";

export default function Client() {
  return (
    <div className="mb-20 mt-32 grid place-content-center">
      <div className="text-center">
        <h1 className="text-xl font-semibold">Clients</h1>
        <p className="text-muted-foreground">Here our clients</p>
      </div>
      <div className="mt-10 grid grid-cols-2 place-content-center gap-20 md:grid-cols-3">
        {brand.map((b, i) => (
          <ClientCard key={i} nama={b.nama} gambar={b.gambar} />
        ))}
      </div>
    </div>
  );
}
