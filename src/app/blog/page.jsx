import Link from "next/link";
import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";
import { getAllPosts, getSlugs, getPost } from "@/lib/post";
import Pagination from "@/components/pagination";


export async function generateStaticParams() {
    const slugs = await getSlugs()
    return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const post = await getPost(slug);
    if (!post) {
        notFound();
    }
    return {
        title: post.title,
        description: post.description,
    };
}

function parsePageParam(paramValue) {
    if (paramValue) {
        const page = parseInt(paramValue);
        if (isFinite(page) && page > 0) {
            return page;
        }
    }
    return 1;
}



export default async function BlogPage({ searchParams }) {
    const param = await searchParams
    const page = parsePageParam(param.page)
    const { datas, pageCount } = await getAllPosts(3, page)

    return (
        < >
            <Heading>Blog Page</Heading>
            <h2 className="text-2xl mb-3">List Blog</h2>
            <Pagination href="/blog" page={page} pageCount={pageCount} />
            {datas.map((post, index) => (
                <PostCard
                    key={index}
                    title={post.title}
                    href={`./blog/${post.slug}`}
                    image={post.image}
                    description={post.description}
                    date={post.date}
                    author={post.author} />
            ))}

            <p>This is the blog page.</p>

        </>
    );
}