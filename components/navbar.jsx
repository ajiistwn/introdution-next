import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className='flex gap-2'>
            <Link href="/" className='text-gray-800 hover:underline'>Home</Link>
            <Link href="/blog" className='text-gray-800 hover:underline'>Blog</Link>
            <Link href="/about" className='text-gray-800 hover:underline'>About</Link>
            <Link href="/contact" className='text-gray-800 hover:underline'>Contact</Link>
        </nav>
    );
}