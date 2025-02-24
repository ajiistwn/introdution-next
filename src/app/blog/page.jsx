import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";
import { getAllPosts, getSlugs, getPost } from "@/lib/post";


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



export default async function BlogPage() {
    const posts = await getAllPosts()
    return (
        < >
            <Heading>Blog Page</Heading>
            <h2 className="text-2xl mb-3">List Blog</h2>

            {posts.map((post, index) => (
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