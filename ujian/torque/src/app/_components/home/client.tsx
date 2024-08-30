import { client } from "@/lib/client";
import Image from "next/image";

export default function Client() {
  return (
    <div className="mb-32 flex justify-center">
      <div className="flex flex-col-reverse items-center gap-10 md:flex-row">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
          {client.map((c, i) => (
            <div className="relative h-28 w-28" key={i}>
              <Image
                key={i}
                src={c.gambar}
                alt="client"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                fill
              />
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-2xl font-semibold uppercase">Our Client</h1>
          <p className="text-muted-foreground">
            These are our 6 satisfied clients of our products
          </p>
        </div>
      </div>
    </div>
  );
}
