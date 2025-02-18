"use client";

import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    window.alert("Home page mounted");
  }, []);
  return (

    <main >
      <h1>Next.js App</h1>
      <p>
        This is a Next.js app with a custom Express server.
      </p>

    </main>

  );
}
