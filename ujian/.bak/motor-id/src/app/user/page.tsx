import { getServerAuthSession } from "~/server/auth";
import Link from "next/link";

export default async function Page() {
  const session = await getServerAuthSession();

  if (!session) {
    return <div>login first</div>;
  }

  return (
    <div className="grid h-[80vh] place-content-center">
      <div>
        Log In As{" "}
        <span className="font-semibold text-green-600">
          {session.user.name ?? session.user.email}
        </span>
      </div>
      <div>
        User id{" "}
        <span className="font-semibold text-green-600">{session.user.id}</span>
      </div>
      <div>
        <Link
          href="/api/auth/signout"
          className="text-red-600 underline underline-offset-4"
        >
          Signout
        </Link>
      </div>
    </div>
  );
}
