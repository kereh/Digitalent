import { Button } from "@/components/ui/button";
import { Plane, User } from "lucide-react";
import { getServerAuthSession } from "@/server/auth";
import Link from "next/link";

export default async function Hero() {
  const session = await getServerAuthSession();

  return (
    <div className="grid h-screen w-full place-content-center">
      <div className="w-full space-y-6 md:max-w-sm">
        <div className="space-y-3 md:text-center">
          <h2 className="text-3xl font-semibold uppercase">Torque</h2>
          <p className="text-muted-foreground">
            Fueled by Passion, Driven by Torque Where Every Ride is a Testament
            to Power and Brotherhood.
          </p>
        </div>
        <div className="flex items-center gap-4 md:justify-center">
          <Link href="/products" className="w-1/3">
            <Button className="flex w-full items-center gap-3 self-center">
              <Plane />
              Explore
            </Button>
          </Link>
          <Link
            href={`${!session?.user ? "/api/auth/signin" : "/api/auth/signout"}`}
            className="w-1/3"
          >
            <Button
              className="flex w-full items-center gap-3 self-center"
              variant={`${!session?.user ? "secondary" : "destructive"}`}
            >
              <User />
              {!session?.user ? "Sign In" : "Sign Out"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
