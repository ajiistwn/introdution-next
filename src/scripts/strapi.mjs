import { writeFileSync } from 'fs';
import qs from "qs"

const url = "http://localhost:1337/api/posts" + "?" + qs.stringify(
    {
        field: ["slug", "title", "description", "publisheAt", "author", "body"],
        populate: { images: { fields: ["url"] } },
        sort: ["publishedAt:desc"],
        pagination: { pageSize: 3 }
    },
    { encodeValuesOnly: true }
)

const response = await fetch(url)
const body = await response.json()
const posts = JSON.stringify(body, null, 2)
// console.log(posts)

const file = "handle-cms/src/scripts/strapi-response.json"
writeFileSync(file, posts)