import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          this is my header
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/posts/1">Post 1</Link>
          </nav>
        </header>
        {children}
        <footer>this is my footer</footer>
      </body>
    </html>
  );
}
