import { getServerAuthSession } from "@/server/auth";
import Link from "next/link";

export default async function Page() {
  const session = await getServerAuthSession();

  if (!session) {
    return (
      <div className="grid h-screen place-content-center">
        <Link href="/" className="text-red-600 underline underline-offset-4">
          Login first
        </Link>
      </div>
    );
  }

  return (
    <div className="grid h-screen place-content-center">
      <h1 className="text-2xl font-semibold">
        Halo,{" "}
        <span className="text-muted-foreground font-normal">
          {session.user.name ?? session.user.email}
        </span>
      </h1>
      <Link
        href="/api/auth/signout"
        className="mt-5 text-center text-red-600 underline underline-offset-4"
      >
        Sign Out
      </Link>
    </div>
  );
}
