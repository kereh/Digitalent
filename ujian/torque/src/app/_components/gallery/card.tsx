interface Props {
  gambar: string;
  nama: string;
  desk: string;
}

export default function GalleryCard({ gambar, nama, desk }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:scale-[1.02]">
      <img
        src={`/img/motor/${gambar}`}
        alt="Gallery Image"
        width={400}
        height={300}
        className="h-[300px] w-full object-fill transition-all group-hover:scale-[1.05]"
        style={{ aspectRatio: "400/300", objectFit: "fill" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-lg font-semibold">{nama}</h3>
        <p className="text-sm">{desk}</p>
      </div>
    </div>
  );
}
