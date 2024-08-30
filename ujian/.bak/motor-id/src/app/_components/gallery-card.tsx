import Image from "next/image";

interface Props {
  gambar: string;
}

export default function MotorCard({ gambar }: Props) {
  return (
    <div className="flex cursor-pointer items-center gap-3 rounded-lg p-4">
      <div className="relative h-64 w-64">
        <Image
          src={`/img/${gambar}`}
          alt="gambar"
          className="relative h-full w-full rounded-lg bg-cover object-fill"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          priority
        />
      </div>
    </div>
  );
}
