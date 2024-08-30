import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Markdown from "react-markdown";
import { getPost } from "@/lib/get-post";
import { getPosts } from "@/lib/get-posts";

interface Props {
  thumb: string;
  title: string;
  author: string;
  date: string;
  content: any;
}

export const generateStaticParams = async () => {
  const posts = getPosts("posts");

  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default function Page(props: any) {
  const folder = "posts/";
  const slug = props.params.slug;
  const post = getPost(folder, slug);

  return (
    <article className="mx-auto mt-16 max-w-3xl px-4 py-8 md:px-6 lg:py-12">
      <img
        src={post.thumb}
        alt="Article Thumbnail"
        width={1200}
        height={600}
        className="mb-6 aspect-[2/1] w-full rounded-lg object-fill"
      />
      <div className="mb-4 flex items-center gap-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src="/placeholder-user.jpg" alt="Author Avatar" />
          <AvatarFallback>{`${post.author}`}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium">{post.title}</div>
          <div className="text-muted-foreground text-sm">
            Published on {post.date}
          </div>
        </div>
      </div>
      {/* <h1 className="mb-4 text-3xl font-bold leading-tight">{title}</h1> */}
      <div className="prose prose-gray dark:prose-invert">
        <Markdown>{post.content}</Markdown>
      </div>
    </article>
  );
}
