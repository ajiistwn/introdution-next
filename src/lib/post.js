import qs from "qs";

export const CACHE_TAG_POSTS = "posts";

const BACKEND_URL = "http://localhost:1337";

import { marked } from "marked";


export async function getPost(slug) {

    const { data } = await fetchPosts({
        filters: {
            slug: {
                $eq: slug
            }
        },
        field: ["slug", "title", "description", "publisheAt", "author", "body"],
        populate: { images: { fields: ["url"] } },
        pagination: { pageSize: 5, withCount: false }
    })
    console.log(data)
    const attributes = data[0]

    return {
        slug: attributes.slug,
        title: attributes.title,
        description: attributes.description,
        author: attributes.author,
        date: attributes.publishedAt.slice(0, "yyyy-mm-dd".length),
        body: marked(attributes.body, { headersIds: false, mangle: false }),
        image: BACKEND_URL + attributes.images.url,
    }

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
    const { data } = await fetchPosts({
        field: ["slug", "title", "description", "publisheAt", "author", "body"],
        populate: { images: { fields: ["url"] } },
        sort: ["publishedAt:desc"],
        pagination: { pageSize: 5, withCount: false }

    })

    return data.map((item) => ({
        slug: item.slug,
        title: item.title,
        description: item.description,
        author: item.author,
        date: item.publishedAt.slice(0, "yyyy-mm-dd".length),
        body: item.body,
        image: BACKEND_URL + item.images.url,
    }))
}

async function fetchPosts(parameters) {
    const url =
        `${BACKEND_URL}/api/posts?` +
        qs.stringify(parameters, { encodeValuesOnly: true });
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