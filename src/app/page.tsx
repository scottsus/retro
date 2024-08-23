"use client";

import Image from 'next/image';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono flex flex-col justify-center items-center p-4">
      <header className="mb-8">
        <h1 className="text-4xl mb-2">👋 Hey there!</h1>
        <p className="text-lg">I'm a tech enthusiast and aspiring entrepreneur. Join me on my journey!</p>
      </header>
      
      <Image 
        src="https://www.scottsus.dev/_next/image?url=%2Fimgs%2FDP.png&w=640&q=75" 
        alt="Handsome Lad" 
        width={128} 
        height={128} 
        className="rounded-full border-4 border-yellow-500 mb-6"
      />

      <main className="text-center">
        <p className="mb-4">Software Engineering | Web Development | IoT</p>
        <p className="mb-8">Skydiving enthusiast, marathon runner, and amateur baker!</p>
        
        <Link href="/">
          <a className="inline-block bg-yellow-500 text-gray-900 px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors duration-300">
            Subscribe to my Newsletter
          </a>
        </Link>
      </main>

      <footer className="mt-12 flex justify-center space-x-6">
        <Image
          src="https://www.scottsus.dev/_next/image?url=%2Fimgs%2Fcompanies%2FAmazon.png&w=640&q=75"
          alt="Amazon"
          width={50}
          height={50}
          className="hover:scale-105 transition-transform"
        />
        <Image
          src="https://www.scottsus.dev/_next/image?url=%2Fimgs%2Fcompanies%2FSourcegraph.png&w=256&q=75"
          alt="Sourcegraph"
          width={50}
          height={50}
          className="hover:scale-105 transition-transform"
        />
        <Image
          src="https://www.scottsus.dev/_next/image?url=%2Fimgs%2Fcompanies%2FSnap-Fitness.png&w=640&q=75"
          alt="Snap Fitness"
          width={50}
          height={50}
          className="hover:scale-105 transition-transform"
        />
      </footer>
    </div>
  );
};

export default HomePage;