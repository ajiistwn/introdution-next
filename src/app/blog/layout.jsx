import Link from 'next/link';
export default function BlogLayout({ children }) {
    return (
        <>
            <ul>
                <li>
                    <Link href="/blog/learn-next" prefetch={false}>Learn Next</Link>
                </li>
                <li>
                    <Link href="/blog/news-title" prefetch={false}>News Title</Link>
                </li>
            </ul>
            <main>{children}</main>
        </>

    );
}   