import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";

interface Props {
  nama: string;
  tanggal: string;
  desc: string;
}

export default function EventCard({ nama, tanggal, desc }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{nama}</CardTitle>
        <CardDescription>{tanggal}</CardDescription>
      </CardHeader>
      <CardContent>{desc}</CardContent>
      <CardFooter>
        <Button>Take a Look</Button>
      </CardFooter>
    </Card>
  );
}
