import Hero from "@/app/_components/home/hero";
import Client from "@/app/_components/home/client";

export default function Page() {
  return (
    <div>
      {/* hero section */}
      <section id="/">
        <Hero />
      </section>
      <section id="client">
        <Client />
      </section>
    </div>
  );
}
