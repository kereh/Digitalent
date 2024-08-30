import Image from "next/image";

interface Props {
  gambar: string;
  nama: string;
  warna: string;
  harga: string;
}

export default function MotorCard({ gambar, nama, warna, harga }: Props) {
  return (
    <div className="flex cursor-pointer items-center gap-3 rounded-lg border p-4">
      <div className="relative h-32 w-32">
        <Image
          src={`/img/${gambar}`}
          alt="gambar"
          className="relative h-full w-full rounded-lg bg-cover object-fill"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          priority
        />
      </div>
      <div className="space-y-3 text-muted-foreground">
        <div>Nama : {nama}</div>
        <div>Warna : {warna}</div>
        <div>Harga : {harga}</div>
      </div>
    </div>
  );
}
