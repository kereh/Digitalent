import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface Props {
  slug: string;
  content: string;
  author: string;
  title: string;
  desc: string;
  date: string;
  thumb: string;
}

export const getPosts = (folder: string) => {
  const files = fs.readdirSync(`${process.cwd()}/${folder}`);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const postsData = markdownPosts.map((file) => {
    const filePath = path.join(folder, file);
    const content = fs.readFileSync(filePath, "utf8");
    const data = matter(content);
    return {
      ...data.data,
      slug: file.replace(".md", ""),
      content: data.content,
    } as Props;
  });
  return postsData;
};
