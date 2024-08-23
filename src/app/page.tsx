"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-mono p-8">
      <header className="flex justify-between items-center mb-8">
        <Image
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQEAAAEBCAMAAABPMuDPAAAAQlBMVEXyZSLyZSLyZSLyZSLyZSL6roH91br2ilD+6tr4nGn0eDf7wp3+9e3zbyz3k1z0gUP7uI/5pXX+38n8y6z////yZSKuMvVfAAAABXRSTlOAQMBgICelMzEAAAOgSURBVHhe5MABDQAAAIIw3eifmSB8vA3Zt5vcuGEgCsLeUBSpnxnb4f2vmn068xK5Z8FuFQ8gCB9q80Dw42Pc+3y8UQABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQACBR7GnuAF6MafNKnDsv+xx/+1mv3nOKjDKXwRWbwIWYJl4F6wigvclUCcWaCKCeRKwAtNFoBN4TC1wigjelMA2+S5YRATv+VyfXKC+NYIqEphVQEfgT2Dv0ws8VAT+BEqAXbCJCPwJHAEEuorAn0AAARGBO4H1CCFw7O+JoArIuQVGERH4EhgBBFQE/gQmF9ARnP4EljG5gB5Iiz+BGkBAreTqTyCAgIzAnUAogdMbwSIm0cQCeiAtvgR6MIEqInAkEEBARuBKIJzAwxOB5SsBb822n0dQxSoOJNBFBI4EAgmMp4jAkUAAATWQ6s8SaEFvz8vPIqhiWAYQcEQgEogqMD5FBBcS+BrBBPRAqtcTqIEF2vUIqsgmgIAjApFAaIF6NQKbwPcIKKAHUr2WQI8k4I+gilUcQMARgUggvEC/EkEzAM8E7wu2CxGsdhJFEvBH0MQqDiegV3J1JBBQ4NhFBDqBzyTvC4qIQCawjgwCOgKdQIstoFdydSQQRcD2rSNoVimRQPuPCFaLFF1AR7A5EggloK/BdAIZBPRVqE6ghxLwR7BaoBQCOgKdQDqBLiIQCSQSGJuIoNlJlEVAR3C8TKCkfHX7fLn+T5tASoFjf9X6YmlSCozyYvxVO4kSCegI1r8n0FIJ6IF0igQyCej9txiWZAI6gsfoViWxwPiy+2gzqzi1QLUR2ATSCeiBtBuSfAI6AjsWkguM738I9PQC3ZFADoGxKYC95xfQEZRxA4FRRALHLQSOXSSQXkBHsB75BXQEbWQV0APJruL8AmMVCaQW0BEsI5uAXsn21FsJVJFAZgH9juJmAsVOorsLlLsJIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAm3547QAAoGPFkAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBH6XAwc0AAAAAME2+ncWxOXNAI6Cs14i3Db7AAAAAElFTkSuQmCC"
          alt="Y Combinator"
          width={50}
          height={50}
        />
        <h1 className="text-4xl font-bold">Y Combinator 🚀</h1>
      </header>

      <main>
        <section className="mb-8">
          <h2 className="text-2xl mb-4">Why Y Combinator?</h2>
          <p>We give startups a disproportionate advantage.</p>
          <Link href="#" className="text-yellow-500 hover:underline mt-2 inline-block">
            Apply to YC
          </Link>
        </section>

        <section className="flex flex-wrap justify-between mb-8">
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <Image
              src="https://www.ycombinator.com/vite/assets/why-yc-new-full-res-B8TvYziy.webp"
              alt="YC Founders Clapping at a YC Batch Event"
              width={300}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <Image
              src="https://bookface-static.ycombinator.com/assets/ycdc/startups/stripe-d1d72c19fe7fbfd9514ffbc26f1c5922a1b77fd7445c78a34fe319c03b986713.png"
              alt="Stripe logo"
              width={200}
              height={100}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <Image
              src="https://bookface-static.ycombinator.com/assets/ycdc/startups/airbnb-423deceb57ea913e2f3a39a1c2b6ecb690f019933b4d767ac91121777aa59107.png"
              alt="Airbnb logo"
              width={200}
              height={100}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <Image
              src="https://bookface-static.ycombinator.com/assets/ycdc/startups/instacart-81d147c59ca98d84b72f606de3af981da477423738120d3b2baec64c3162ba14.png"
              alt="Instacart logo"
              width={200}
              height={100}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl mb-4">Our Track Record 🌟</h2>
          <ul className="list-disc pl-8">
            <li>5,000 funded startups</li>
            <li>$600B combined valuation</li>
            <li>90+ billion dollar companies</li>
          </ul>
        </section>
      </main>

      <footer className="mt-16">
        <p>© 2024 Y Combinator</p>
        <div className="flex space-x-4 mt-4">
          <Link href="#"><span className="text-blue-500 hover:underline">Twitter</span></Link>
          <Link href="#"><span className="text-blue-700 hover:underline">Facebook</span></Link>
          <Link href="#"><span className="text-pink-500 hover:underline">Instagram</span></Link>
        </div>
      </footer>
    </div>
  );
}