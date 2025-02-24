import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getPost, getSlugs } from "@/lib/post"
import Image from "next/image";
import { notFound } from "next/navigation";


export default async function learnNextjsPage({ params }) {
    const { slug } = await params
    const post = await getPost(slug)
    if (!post) {
        notFound()
    }
    const { title, image, date, author, body } = post
    return (
        < >
            <Heading>{title}</Heading>
            <ShareLinkButton />
            <Image src={image} alt={title} width={640} height={360} className="mb-4 rounded" />
            <small className="mb-4">{author} - {date}</small>
            <article dangerouslySetInnerHTML={{ __html: body }} className="max-w-screen-sm bg-gray-100 markdown-body " />

        </>
    );
}