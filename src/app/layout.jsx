import './globals.css';
import "github-markdown-css";
import Navbar from '../components/Navbar';


import { Phudu } from "next/font/google";

export const phudu = Phudu({
  weight: ["400", "700"],
  subsets: ['latin'],
})

export const metadata = {
  title: {
    default: "Learn Next Js Page",
    template: "%s | Next Js Page"
  },
  description: "All tutorial and documentation"
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${phudu.variable}`}>
      <head>
      </head>
      <body className='bg-gray-100 flex flex-col px-4 py-2 min-h-screen'>
        <header>
          <Navbar />
        </header>
        <main className='py-3 grow'>
          {children}
        </main>
        <footer className='border-t py-3 text-center text-xs' >
          <p>
            &copy; {new Date().getFullYear()} Cms App
          </p>
        </footer>
      </body>
    </html>
  );
}
