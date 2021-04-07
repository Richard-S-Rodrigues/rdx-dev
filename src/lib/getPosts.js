import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";

import MDXComponents from "../components/MDXComponents.js";
import { formatSlug } from "./utils.js";

const postsDirectory = join(process.cwd(), "src/_posts");

export const getPostsFiles = async () => {
  return fs.readdirSync(postsDirectory);
};

export const getAllPosts = async () => {
  const files = await getPostsFiles();

  const allFilesContent = [];

  files.forEach((file) => {
    const source = fs.readFileSync(join(postsDirectory, file), "utf8");

    const { data } = matter(source);

    allFilesContent.push({ ...data, slug: formatSlug(file) });
  });

  return allFilesContent;
};

export const getPostBySlug = async (slug) => {
  const source = fs.readFileSync(join(postsDirectory, `${slug}.md`), "utf8");

  const { data, content } = matter(source);

  const body_markdown = await renderToString(content, {
    components: MDXComponents,
  });

  return { data, body_markdown };
};
