import { readFile, readdir } from 'fs/promises';
import qs from "qs";

export const CACHE_TAG_POSTS = "posts";

const BACKEND_URL = "http://localhost:1337";

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


export async function getSlugs() {
    const { data } = await fetchPosts({
        fields: ["slug"],
        sort: ["publishedAt:desc"],
        pagination: { pageSize: 100 },
    });
    return data.map(({ attributes }) => attributes.slug);
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

async function fetchPosts(parameters) {
    const url =
        `${BACKEND_URL}/api/posts?` +
        qs.stringify(parameters, { encodeValuesOnly: true });
    console.log(url);
    const response = await fetch(url, {
        next: {
            tags: [CACHE_TAG_POSTS],
        },
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}