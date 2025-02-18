// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Cms App</title>
      </head>
      <body >
        {children}
      </body>
    </html>
  );
}
