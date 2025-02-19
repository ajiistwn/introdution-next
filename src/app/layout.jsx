import './globals.css';
import Navbar from '../../components/navbar';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Cms App</title>
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
