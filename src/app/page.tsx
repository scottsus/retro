import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 font-mono">
      <header className="mb-12 text-center">
        <Image
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQEAAAEBCAMAAABPMuDPAAAAQlBMVEXyZSLyZSLyZSLyZSLyZSL6roH91br2ilD+6tr4nGn0eDf7wp3+9e3zbyz3k1z0gUP7uI/5pXX+38n8y6z////yZSKuMvVfAAAABXRSTlOAQMBgICelMzEAAAOgSURBVHhe5MABDQAAAIIw3eifmSB8vA3Zt5vcuGEgCsLeUBSpnxnb4f2vmn068xK5Z8FuFQ8gCB9q80Dw42Pc+3y8UQABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQACBR7GnuAF6MafNKnDsv+xx/+1mv3nOKjDKXwRWbwIWYJl4F6wigvclUCcWaCKCeRKwAtNFoBN4TC1wigjelMA2+S5YRATv+VyfXKC+NYIqEphVQEfgT2Dv0ws8VAT+BEqAXbCJCPwJHAEEuorAn0AAARGBO4H1CCFw7O+JoArIuQVGERH4EhgBBFQE/gQmF9ARnP4EljG5gB5Iiz+BGkBAreTqTyCAgIzAnUAogdMbwSIm0cQCeiAtvgR6MIEqInAkEEBARuBKIJzAwxOB5SsBb822n0dQxSoOJNBFBI4EAgmMp4jAkUAAATWQ6s8SaEFvz8vPIqhiWAYQcEQgEogqMD5FBBcS+BrBBPRAqtcTqIEF2vUIqsgmgIAjApFAaIF6NQKbwPcIKKAHUr2WQI8k4I+gilUcQMARgUggvEC/EkEzAM8E7wu2CxGsdhJFEvBH0MQqDiegV3J1JBBQ4NhFBDqBzyTvC4qIQCawjgwCOgKdQIstoFdydSQQRcD2rSNoVimRQPuPCFaLFF1AR7A5EggloK/BdAIZBPRVqE6ghxLwR7BaoBQCOgKdQDqBLiIQCSQSGJuIoNlJlEVAR3C8TKCkfHX7fLn+T5tASoFjf9X6YmlSCozyYvxVO4kSCegI1r8n0FIJ6IF0igQyCej9txiWZAI6gsfoViWxwPiy+2gzqzi1QLUR2ATSCeiBtBuSfAI6AjsWkguM738I9PQC3ZFADoGxKYC95xfQEZRxA4FRRALHLQSOXSSQXkBHsB75BXQEbWQV0APJruL8AmMVCaQW0BEsI5uAXsn21FsJVJFAZgH9juJmAsVOorsLlLsJIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAm3547QAAoGPFkAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBH6XAwc0AAAAAME2+ncWxOXNAI6Cs14i3Db7AAAAAElFTkSuQmCC"
          alt="Y Combinator"
          width={100}
          height={100}
        />
        <h1 className="mt-4 text-4xl text-orange-600">
          Apply to Y Combinator! 🚀
        </h1>
        <p className="mt-2 text-lg text-gray-700">
          Join us and gain a huge advantage in your startup journey.
        </p>
        <Link
          href="#"
          className="mt-4 inline-block rounded bg-orange-600 px-6 py-2 text-white transition hover:bg-orange-500"
        >
          Apply Now
        </Link>
      </header>

      <main>
        <section className="mb-12 rounded bg-white p-6 shadow-md">
          <h2 className="mb-4 text-3xl text-blue-700">Why Y Combinator?</h2>
          <p className="text-gray-800">
            We have funded over 5,000 startups with a combined valuation of
            $600B. 🎉
          </p>
        </section>

        <section className="flex flex-wrap items-center justify-between">
          <div className="p-4">
            <Image
              src="https://bookface-static.ycombinator.com/assets/ycdc/startups/stripe-d1d72c19fe7fbfd9514ffbc26f1c5922a1b77fd7445c78a34fe319c03b986713.png"
              alt="Stripe logo"
              width={100}
              height={50}
            />
          </div>
          <div className="p-4">
            <Image
              src="https://bookface-static.ycombinator.com/assets/ycdc/startups/airbnb-423deceb57ea913e2f3a39a1c2b6ecb690f019933b4d767ac91121777aa59107.png"
              alt="Airbnb logo"
              width={100}
              height={50}
            />
          </div>
          <div className="p-4">
            <Image
              src="https://bookface-static.ycombinator.com/assets/ycdc/startups/instacart-81d147c59ca98d84b72f606de3af981da477423738120d3b2baec64c3162ba14.png"
              alt="Instacart logo"
              width={100}
              height={50}
            />
          </div>
          <div className="p-4">
            <Image
              src="https://bookface-static.ycombinator.com/assets/ycdc/startups/doordash-f41c839bb0522ead71e8d99ed3ae0495c04271f6f3f3edc6b0effbbff172bc1d.png"
              alt="DoorDash logo"
              width={100}
              height={50}
            />
          </div>
          <div className="p-4">
            <Image
              src="https://bookface-static.ycombinator.com/assets/ycdc/startups/twitch-1b4772b83a73b6fa827ef467ecc17023a2bfbbf936633bffb5e93674690e74d6.png"
              alt="Twitch logo"
              width={100}
              height={50}
            />
          </div>
        </section>

        <section className="rounded bg-white p-6 shadow-md">
          <h2 className="mb-4 text-3xl text-blue-700">YC Top Companies 🏆</h2>
          <p className="text-gray-800">
            Meet Airbnb, DoorDash, and many more who started with YC. 
          </p>
        </section>
      </main>

      <footer className="mt-12 text-center">
        <p className="text-gray-600">© 2024 Y Combinator</p>
      </footer>
    </div>
  );
};

export default HomePage;
