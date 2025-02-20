import { readFile, readdir } from 'fs/promises';

import matter from "gray-matter";
import { marked } from "marked";

export async function getPost(slug) {
    const text = await readFile(`./public/content/blog/${slug}.md`, "utf-8");
    const {
        content,
        data: { title, description, image, date, author }
    } = matter(text)
    const body = marked(content)
    return { title, slug, description, image, date, author, body }

}


export async function getAllPosts() {
    const files = await readdir("./public/content/blog")
    const slugs = files
        .filter((file) => file.endsWith(".md"))
        .map((file) => file.slice(0, -".md".length))

    const posts = []
    for (const slug of slugs) {
        const post = await getPost(slug)
        posts.push(post)
    }
    return posts
}
