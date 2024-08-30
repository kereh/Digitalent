export default function Footer() {
  const waktu = new Date().getFullYear();

  return (
    <footer className="border-t p-4 text-center">
      <h1 className="font-semibold">&copy; {waktu} Torque.Inc </h1>
    </footer>
  );
}
