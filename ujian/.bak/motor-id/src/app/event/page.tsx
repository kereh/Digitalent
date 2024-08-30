import EventCard from "~/app/_components/event-card";
import { event } from "~/lib/event";

export default function Page() {
  return (
    <div className="w-full pt-20">
      {/* header */}
      <div className="flex justify-center text-center">
        <div className="w-full space-y-3 md:max-w-md">
          <h1 className="text-2xl font-semibold">Event</h1>
          <p>Berikut ini daftar event dan artikel yang ada di MotorID</p>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 place-content-center gap-20 md:grid-cols-3">
        {event.map((e, i) => (
          <EventCard key={i} nama={e.nama} tanggal={e.tanggal} desc={e.desc} />
        ))}
      </div>
    </div>
  );
}
