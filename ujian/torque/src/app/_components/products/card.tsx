import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Props {
  gambar: string;
  nama: string;
  desk: string;
  harga: string;
}

export default function ProductCard({ gambar, nama, desk, harga }: Props) {
  return (
    <Card className="w-full max-w-sm overflow-hidden rounded-lg shadow-xl">
      <img
        src={`/img/motor/${gambar}`}
        alt="Product Image"
        width={400}
        height={400}
        className="h-[300px] w-full object-fill"
        style={{ aspectRatio: "400/400", objectFit: "fill" }}
      />
      <CardContent className="space-y-4 p-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{nama}</h3>
          <p className="text-muted-foreground text-sm">{desk}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">{harga}</span>
          <Button size="sm">Beli</Button>
        </div>
      </CardContent>
    </Card>
  );
}
