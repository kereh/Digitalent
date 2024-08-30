import { getPosts } from "@/lib/get-posts";
import PostCard from "@/app/_components/posts/card";

export default function Page() {
  const posts = getPosts("posts");

  return (
    <div className="mb-10 w-full pt-16">
      <div className="my-10">
        <h1 className="upper text-3xl font-semibold">Articles and Event</h1>
        <p className="text-muted-foreground">
          Explore products from around the world
        </p>
      </div>
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <PostCard
            key={i}
            thumb={post.thumb}
            title={post.title}
            desc={post.desc}
            author={post.author}
            date={post.date}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  );
}
