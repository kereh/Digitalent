import { LogIn, Mail, Phone } from "lucide-react";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import Client from "~/app/_components/client";
import { getServerAuthSession } from "~/server/auth";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <div className="mt-24 grid w-full place-content-center">
      <div className="w-full md:max-w-lg">
        <div className="flex items-center md:flex-row">
          <div className="space-y-6 md:text-center">
            <h1 className="text-2xl font-semibold">MotorID</h1>
            <p className="text-muted-foreground">
              Selamat Datang di MotorID! Bergabunglah dengan komunitas motor
              terbesar di Indonesia. Temukan teman baru, berbagi cerita, dan
              nikmati perjalanan bersama. Kembangkan passion Anda bersama kami
              di MotorID!
            </p>
            <div className="flex flex-col justify-center gap-6 text-muted-foreground md:flex-row md:items-center">
              <div className="flex items-center gap-3">
                <Mail />
                <span>test@test.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone />
                <span>0896-1222-1333</span>
              </div>
            </div>
            <div className="flex items-center gap-3 md:justify-center">
              <Link href="/products">
                <Button variant="secondary">Products</Button>
              </Link>
              <Link
                href={`${session?.user ? "/api/auth/signout" : "/api/auth/signin"}`}
              >
                <Button variant="outline">
                  {session?.user && (
                    <div className="flex items-center gap-3">
                      <LogIn className="h-6 w-6" />
                      <span>Sign Out</span>
                    </div>
                  )}
                  {!session?.user && (
                    <div className="flex items-center gap-3">
                      <LogIn className="h-6 w-6" />
                      <span>Sign In</span>
                    </div>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Client />
    </div>
  );
}
