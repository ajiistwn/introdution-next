import Link from 'next/link';

export default function Navbar() {
    return (
        <nav >
            <ul className='flex gap-2'>
                <li>
                    <Link href="/" className='text-gray-800 hover:underline' prefetch={false}>Home</Link>
                </li>
                <li className='ml-auto'>
                    <Link href="/blog" className='text-gray-800 hover:underline' prefetch={false}>Blog</Link>
                </li>
                <li>
                    <Link href="/about" className='text-gray-800 hover:underline' prefetch={false}>About</Link>
                </li>
                <li>
                    <Link href="/contact" className='text-gray-800 hover:underline' prefetch={false}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}