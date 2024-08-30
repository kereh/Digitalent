import { getServerAuthSession } from "@/server/auth";
import List from "@/app/_components/crud/list";
import FormCrud from "@/app/_components/crud/form";
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
    <div className="w-full pt-24">
      <div className="space-y-3 md:text-center">
        <h1 className="text-xl font-semibold">CRUD Showcase</h1>
        <p className="text-muted-foreground">Simple crud showcase operation</p>
      </div>
      <div className="flex justify-center">
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          <List />
          <FormCrud />
        </div>
      </div>
    </div>
  );
}
