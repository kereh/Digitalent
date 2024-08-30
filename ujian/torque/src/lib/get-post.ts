import fs from "fs";
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

export const getPost = (folder: string, slug: string) => {
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  return {
    ...matterResult.data,
    slug: file.replace(".md", ""),
    content: matterResult.content,
  } as Props;
};
