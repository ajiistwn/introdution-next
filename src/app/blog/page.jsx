import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";
import Link from "next/link";

export default function BlogPage() {
    return (

        < >
            <Heading>Blog Page</Heading>
            <h2 className="text-2xl mb-3">List Blog</h2>
            <PostCard
                title="Post Title"
                href="/blog/learn-next"
                image="/images/image-2.jpg"
                description="This is a post description."
                date="2021-01-01"
                author="Aji" />

            <p>This is the blog page.</p>

        </>

    );
}