import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/post";

export default async function BlogPage() {
    const posts = await getAllPosts()
    return (
        < >
            <Heading>Blog Page</Heading>
            <h2 className="text-2xl mb-3">List Blog</h2>

            {posts.map(post => (
                <PostCard
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