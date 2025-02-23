import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getPost } from "@/lib/post"


export default async function learnNextjsPage({ params }) {
    const { slug } = await params
    const { title, image, date, author, body } = await getPost(slug)
    return (
        < >
            <Heading>{title}</Heading>
            <ShareLinkButton />
            <img src={image} alt="" width={640} height={360} className="mb-4 rounded" />
            <small className="mb-4">{author} - {date}</small>
            <article dangerouslySetInnerHTML={{ __html: body }} className="max-w-screen-sm prose-slate prose " />

        </>
    );
}