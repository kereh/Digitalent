import Image from "next/image";

interface Props {
  nama: string;
  gambar: string;
}

export default function ClientCard({ nama, gambar }: Props) {
  return (
    <div className="relative h-20 w-20">
      <Image
        src={`/img/${gambar}`}
        alt={nama}
        className="relative object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill
        priority
      />
    </div>
  );
}
