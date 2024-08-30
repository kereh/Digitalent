import MotorCard from "~/app/_components/motor-card";
import { motor } from "~/lib/motor";

export default function Page() {
  return (
    <div className="w-full pt-20">
      {/* header */}
      <div className="flex justify-center text-center">
        <div className="w-full space-y-3 md:max-w-md">
          <h1 className="text-2xl font-semibold">Our Product</h1>
          <p>Heres our product list</p>
        </div>
      </div>
      {/* product here */}
      <div className="grid place-content-center">
        <div className="w-full">
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
            {motor.map((m, i) => (
              <MotorCard
                gambar={m.gambar}
                key={i}
                nama={m.nama}
                warna={m.warna}
                harga={m.harga}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
