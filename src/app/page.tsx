"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono flex flex-col items-center p-6">
      <header className="flex justify-between w-full max-w-4xl mb-8">
        <nav className="flex space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/guestbook" className="hover:underline">Guestbook</Link>
        </nav>
        <div className="space-x-4">
          <Link href="/instagram">
            <Image src="https://www.scottsus.dev/_next/image?url=%2Fimgs%2Ficons%2FInstagram.png&w=96&q=75" alt="Instagram" width={24} height={24} />
          </Link>
          <Link href="/twitter">
            <Image src="https://www.scottsus.dev/_next/image?url=%2Fimgs%2Ficons%2FTwitter.png&w=96&q=75" alt="Twitter" width={24} height={24} />
          </Link>
          <Link href="/github">
            <Image src="https://www.scottsus.dev/_next/image?url=%2Fimgs%2Ficons%2FGitHub.png&w=96&q=75" alt="GitHub" width={24} height={24} />
          </Link>
          <Link href="/linkedin">
            <Image src="https://www.scottsus.dev/_next/image?url=%2Fimgs%2Ficons%2FLinkedIn.png&w=96&q=75" alt="LinkedIn" width={24} height={24} />
          </Link>
        </div>
      </header>
      
      <section className="text-center mb-16">
        <Image src="https://www.scottsus.dev/_next/image?url=%2Fimgs%2FDP.png&w=640&q=75" alt="Handsome Lad" width={128} height={128} className="rounded-full mx-auto mb-4" />
        <h1 className="text-3xl font-bold">Scott Susanto</h1>
        <p className="mt-4 max-w-xl mx-auto">
          Hey there! I'm Scott, a 4th year Computer Engineering & Computer Science student at USC. I thrive in Software Engineering, Web Development, Distributed Systems, and IoT. Let's change the world together!
        </p>
      </section>

      <section className="flex flex-col items-center space-y-8 mb-16">
        <Image src="https://www.scottsus.dev/_next/image?url=%2Fimgs%2Fcompanies%2FAmazon.png&w=640&q=75" alt="Amazon" width={128} height={40} />
        <Image src="https://www.scottsus.dev/_next/image?url=%2Fimgs%2Fcompanies%2FSourcegraph.png&w=256&q=75" alt="Sourcegraph" width={64} height={64} />
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Join the Adventure!</h2>
        <Image src="https://www.scottsus.dev/_next/image?url=%2Fimgs%2FNewsletter.png&w=640&q=75" alt="Newsletter Robot" width={160} height={160} className="mx-auto mb-4" />
        <p className="max-w-xl mx-auto mb-8">
          I was born too late to explore the world, too early to explore the galaxy, but just in time to write these weekly newsletters. Consider subscribing and let's change the world together!
        </p>
        <Link href="/subscribe" className="bg-teal-500 text-black px-4 py-2 rounded hover:bg-teal-700">Subscribe to my newsletter</Link>
      </section>
    </div>
  );
}