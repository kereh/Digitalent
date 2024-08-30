import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

interface Props {
  thumb: string;
  title: string;
  author: string;
  date: string;
  desc: string;
  slug: string;
}

export default function PostCard({
  thumb,
  title,
  author,
  date,
  desc,
  slug,
}: Props) {
  return (
    <Link href={`/articles/${slug}`} prefetch={false}>
      <Card className="w-full max-w-md shadow-lg">
        <img
          src={`${thumb}`}
          alt="Article Image"
          width={600}
          height={400}
          className="h-[200px] w-full rounded-t-lg object-cover"
          style={{ aspectRatio: "600/400", objectFit: "cover" }}
        />
        <CardContent className="p-4">
          <div className="space-y-6">
            <h3 className="text-xl font-bold">{title}</h3>
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <div>By {author}</div>
              <Separator orientation="vertical" />
              <div>{date}</div>
            </div>
            <p className="text-muted-foreground line-clamp-3">{desc}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
