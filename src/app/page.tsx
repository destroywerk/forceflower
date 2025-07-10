"use client";
import React, { useState } from "react";
import Image from "next/image";

const PAINTINGS = [
  {
    title: "The Benthic, Pleading Grasp Upon The Land",
    slug: "benthic",
    mainImage: "/benthic.jpg",
    details: [
      "/benthic.jpg",
      "/details/benthic1.jpg",
      "/details/benthic2.jpg",
      "/details/benthic3.jpg"
    ],
    size: "100x100cm",
    medium: "Oil on canvas",
    year: "2024-5",
    price: "£1200",
    description: null
  },
  {
    title: "Between The Gut Biome And The Body Politic",
    slug: "betweenthegut",
    mainImage: "/betweenthegut.jpg",
    details: [
      "/betweenthegut.jpg",
      "/details/betweenthegut1.jpg",
      "/details/betweenthegut2.jpg",
      "/details/betweenthegut3.jpg"
    ],
    size: "100x100cm",
    medium: "Oil on canvas",
    year: "2024",
    price: "£1200",
    description: null
  },
  {
    title: "Language Breaks Against Her Cheek",
    slug: "languagebreaks",
    mainImage: "/languagebreaks.jpg",
    details: [
      "/languagebreaks.jpg",
      "/details/languagebreaks1.jpg",
      "/details/languagebreaks2.jpg",
      "/details/languagebreaks3.jpg"
    ],
    size: "100x100cm",
    medium: "Oil on canvas",
    year: "2024",
    price: "£1200",
    description: null
  },
  {
    title: "Ontogenesis",
    slug: "ontogenesis",
    mainImage: "/ontogenesis.jpg",
    details: [
      "/ontogenesis.jpg",
      "/details/ontogenesis1.jpg",
      "/details/ontogenesis2.jpg",
      "/details/ontogenesis3.jpg"
    ],
    size: "100x100cm",
    medium: "Oil on canvas",
    year: "2025",
    price: "£1200",
    description: null
  },
  {
    title: "The Birdsong Is Sharp",
    slug: "thebirdsong",
    mainImage: "/thebirdsong.jpg",
    details: [
      "/thebirdsong.jpg",
      "/details/thebirdsong1.jpg",
      "/details/thebirdsong2.jpg",
      "/details/thebirdsong3.jpg"
    ],
    size: "100x100cm",
    medium: "Oil on canvas",
    year: "2024",
    price: "£1200",
    description: null
  },
  {
    title: "Cups Of Kindness",
    slug: "cupsof",
    mainImage: "/cupsof.jpg",
    details: [
      "/cupsof.jpg",
      "/details/cupsof1.jpg",
      "/details/cupsof2.jpg",
      "/details/cupsof3.jpg"
    ],
    size: "100x100cm",
    medium: "Oil on canvas",
    year: "2024",
    price: "Not available (Courtesy of private collection, P. Vakili)",
    description: null
  },
  {
    title: "Puddles Unfolding Into Lagoons",
    slug: "puddles",
    mainImage: "/puddles.jpg",
    details: [
      "/puddles.jpg",
      "/details/puddles1.jpg",
      "/details/puddles2.jpg",
      "/details/puddles3.jpg"
    ],
    size: "51x61cm",
    medium: "Oil on canvas",
    year: "2024",
    price: "£800",
    description: null
  },
  {
    title: "The Fantasy Of Perpetual Abundance",
    slug: "thefantasy",
    mainImage: "/thefantasy.jpg",
    details: [
      "/thefantasy.jpg",
      "/details/thefantasy1.jpg",
      "/details/thefantasy2.jpg",
      "/details/thefantasy3.jpg"
    ],
    size: "51x61cm",
    medium: "Oil on canvas",
    year: "2025",
    price: "£800",
    description: null
  },
  {
    title: "Too Physical To Be Bearable",
    slug: "toophysical",
    mainImage: "/toophysical.jpg",
    details: [
      "/toophysical.jpg",
      "/details/toophysical1.jpg",
      "/details/toophysical2.jpg",
      "/details/toophysical3.jpg"
    ],
    size: "51x61cm",
    medium: "Oil on canvas",
    year: "2024",
    price: "£800",
    description: null
  },
  {
    title: "Waters Rise, Waters Rise",
    slug: "watersrise",
    mainImage: "/watersrise.jpg",
    details: [
      "/watersrise.jpg",
      "/details/watersrise1.jpg",
      "/details/watersrise2.jpg",
      "/details/watersrise3.jpg"
    ],
    size: "25x30cm",
    medium: "Oil on canvas",
    year: "2025",
    price: "£400",
    description: null
  },
  {
    title: "Psithurism",
    slug: "psithurism",
    mainImage: "/psithurism.jpg",
    details: [
      "/psithurism.jpg",
      "/details/psithurism1.jpg",
      "/details/psithurism2.jpg"
    ],
    size: "25x30cm",
    medium: "Oil on canvas",
    year: "2025",
    price: "£400",
    description: null
  },
  {
    title: "The Inchoate Self Meeting The Sun",
    slug: "theinchoate",
    mainImage: "/theinchoate.JPG",
    details: [
      "/theinchoate.JPG",
      "/details/theinchoate1.JPG",
      "/details/theinchoate2.JPG",
      "/details/theinchoate3.JPG"
    ],
    size: "25x30cm",
    medium: "Oil on canvas",
    year: "2025",
    price: "£400",
    description: null
  },
  {
    title: "Walking Each Other Home",
    slug: "walkingeach",
    mainImage: "/walkingeach.jpg",
    details: [
      "/walkingeach.jpg",
      "/details/walkingeach1.jpg",
      "/details/walkingeach2.jpg",
      "/details/walkingeach3.jpg"
    ],
    size: "100x50cm",
    medium: "Oil on canvas",
    year: "2024",
    price: "£1000",
    description: null
  },
  {
    title: "The Song Of Us",
    slug: "thesong",
    mainImage: "/thesong.jpg",
    details: [
      "/thesong.jpg",
      "/details/thesong1.jpg",
      "/details/thesong2.jpg",
      "/details/thesong3.jpg"
    ],
    size: "25x35cm",
    medium: "Oil on canvas",
    year: "2024",
    price: "£600",
    description: null
  },
  {
    title: "Growing Pains",
    slug: "growingpains",
    mainImage: "/growingpains.jpg",
    details: [
      "/growingpains.jpg",
      "/details/growingpains1.jpg",
      "/details/growingpains2.jpg",
      "/details/growingpains3.jpg"
    ],
    size: "25x30cm",
    medium: "Oil on canvas",
    year: "2024",
    price: "£400",
    description: null
  },
  {
    title: "The Midnight Day",
    slug: "midnight",
    mainImage: "/midnight.jpg",
    details: [
      "/midnight.jpg",
      "/details/midnight1.jpg",
      "/details/midnight2.jpg",
      "/details/midnight3.jpg"
    ],
    size: "20x15cm",
    medium: "Oil on canvas",
    year: "2024",
    price: "£250",
    description: null
  },
  {
    title: "Approaching Home",
    slug: "approaching",
    mainImage: "/approaching.jpg",
    details: [
      "/approaching.jpg",
      "/details/approaching1.jpg",
      "/details/approaching2.jpg",
      "/details/approaching3.jpg"
    ],
    size: "20x15cm",
    medium: "Oil on canvas",
    year: "2024",
    price: "£250",
    description: null
  },
  {
    title: "Our Brownian Waltz",
    slug: "ourbrownian",
    mainImage: "/ourbrownian.jpg",
    details: [
      "/ourbrownian.jpg",
      "/details/ourbrownian1.jpg",
      "/details/ourbrownian2.jpg",
      "/details/ourbrownian3.jpg"
    ],
    size: "30x40cm",
    medium: "Oil on canvas",
    year: "2024",
    price: "£600",
    description: null
  }
];

export default function GalleryPage() {
  const [open, setOpen] = useState<number | null>(null);
  const [showFullText, setShowFullText] = useState(false);
  return (
    <div className="min-h-screen bg-white text-black dark:bg-white dark:text-black px-4 pb-12 pt-8 sm:px-8 font-sans">
      <header className="w-full flex flex-col items-start mb-12">
        <h1 className="text-5xl sm:text-7xl font-medium mb-2" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 500 }}>
          THE FORCE THAT DRIVES THE FLOWER
        </h1>
        <a
          href="https://www.instagram.com/timgreen.studio/"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4"
          aria-label="Instagram"
          style={{ display: 'inline-block', width: 48, height: 48 }}
        >
          <svg fill="#000000" width="48" height="48" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"/><path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"/></svg>
        </a>
        <div className="flex flex-col sm:flex-row sm:items-end w-full justify-between">
          <span className="text-2xl sm:text-3xl font-medium" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 500 }}>
            A series of oil paintings by <a href="https://timgreenstudio.cargo.site/" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted underline-offset-2 font-medium">Tim Green</a>.
          </span>
          <div className="flex flex-col items-start sm:items-end mt-8 sm:mt-0 gap-2 text-2xl sm:text-3xl font-medium" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 500 }}>
            <span>23 – 27 July</span>
            <span className="text-[#6B434C]">Private view 24 July 5 – 8pm</span>
            <a href="https://maps.google.com/?q=Three+Rooms+74+Beulah+Rd+London+E17+9LE" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted underline-offset-2">Three Rooms 74 Beulah Rd London E17 9LE</a>
          </div>
        </div>
      </header>
      <div className="w-full mb-12">
        <p className="text-lg sm:text-xl leading-relaxed" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300 }}>
          "The Force That Drives the Flower" is a solo exhibition of oil paintings, over a variety of scales, exploring the inherent, undeniable connection between all living things. The title, inspired by the Dylan Thomas poem, introduces this as a vibrant celebration of the universal pulse that animates human, animal, aquatic, botanical life, and the primal matter of the cosmos.
        </p>
        <div className="hidden sm:block">
          <p className="text-lg sm:text-xl leading-relaxed mt-4" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300 }}>
            Existing at the threshold between colour and translucency, the main themes (pink, blue, and green) are representative of the "humours" of life - flesh, water/air, and flora. The combination of tenderness and interspersed boundaries are asking us to consider what the margins are between where the atoms that manifest us end and the rest of the world begins. Particularly where those edges dissolve in reference to sexuality and mitosis and the implications of internal bodies, human and otherwise.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed mt-4" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300 }}>
            Through the oscillation between texture and subtlety, the oils create pulsing and organic forms that allow multiple viewings to find different structures and resonances in the subjects. The visibility of the brush strokes imply the hand of the artist and the work is simultaneously abstract and tangible, suggesting the first & second bodies of the artist and viewer as in Daisy Hildyard's 2017 novel The Second Body. The experimentation across scales weaves a coherent collection that alludes to the tapestry of life and the concept of interbeing that the series insists upon.
          </p>
        </div>
        <div className="block sm:hidden">
          {showFullText && (
            <>
              <p className="text-lg sm:text-xl leading-relaxed mt-4" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300 }}>
                Existing at the threshold between colour and translucency, the main themes (pink, blue, and green) are representative of the "humours" of life - flesh, water/air, and flora. The combination of tenderness and interspersed boundaries are asking us to consider what the margins are between where the atoms that manifest us end and the rest of the world begins. Particularly where those edges dissolve in reference to sexuality and mitosis and the implications of internal bodies, human and otherwise.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed mt-4" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300 }}>
                Through the oscillation between texture and subtlety, the oils create pulsing and organic forms that allow multiple viewings to find different structures and resonances in the subjects. The visibility of the brush strokes imply the hand of the artist and the work is simultaneously abstract and tangible, suggesting the first & second bodies of the artist and viewer as in Daisy Hildyard's 2017 novel The Second Body. The experimentation across scales weaves a coherent collection that alludes to the tapestry of life and the concept of interbeing that the series insists upon.
              </p>
            </>
          )}
          <button 
            onClick={() => setShowFullText(!showFullText)}
            className="mt-4 text-sm text-gray-600 flex items-center gap-1 hover:text-gray-800 transition-colors"
            style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 300 }}
          >
            {showFullText ? 'Show less' : 'Read more'}
            <svg 
              className={`w-4 h-4 transition-transform ${showFullText ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {PAINTINGS.map((painting, idx) => (
          <React.Fragment key={painting.slug}>
            <div className="cursor-pointer group" onClick={() => setOpen(idx)}>
              <div className="w-full h-[300px] overflow-hidden rounded-[24px] border border-gray-200">
                <Image
                  src={painting.mainImage}
                  alt={painting.title}
                  width={600}
                  height={300}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                  priority={idx === 0}
                />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
                  <div>
                    <div className="text-lg font-medium italic" style={{ fontFamily: 'Helvetica Neue Medium Italic, Helvetica Neue, Helvetica, Arial, sans-serif', fontStyle: 'italic' }}>{painting.title}</div>
                    <div className="text-sm mt-1" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                      {painting.size}, {painting.medium}, {painting.year}
                    </div>
                    <div className="text-sm mt-1" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>{painting.price}</div>
                  </div>
                  {painting.slug !== 'cupsof' && (
                    <div className="flex w-full sm:w-auto justify-end sm:justify-start mt-2 sm:mt-0">
                      <a
                        href={`mailto:hello@timgreen.design?subject=${encodeURIComponent(painting.title)}`}
                        className="inline-flex max-w-max px-4 py-2 text-xs rounded-full bg-pink-100 text-gray-800 font-medium hover:bg-pink-200 transition"
                        style={{paddingTop:8,paddingBottom:8}}
                        onClick={e => e.stopPropagation()}
                      >
                        Enquire now
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {idx < PAINTINGS.length - 1 && (
              <div className="block sm:hidden w-full my-6" style={{height: '0.5px', background: '#e5e7eb'}} />
            )}
          </React.Fragment>
        ))}
      </div>
      {/* Modal for detail view */}
      {open !== null && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center" onClick={() => setOpen(null)}>
          <div className="bg-white rounded-2xl max-w-6xl w-[96vw] h-[96vh] p-6 relative flex flex-col overflow-y-auto" style={{overflowY: 'auto'}} onClick={e => e.stopPropagation()}>
            <div className="flex w-full justify-start mb-4 sm:mb-0">
              <button className="text-[1.7rem] leading-none font-light ml-[2px] sm:ml-[8px] mt-2 sm:mt-0 pb-2" style={{fontWeight: 200, paddingLeft: '0', paddingRight: '8px'}} onClick={() => setOpen(null)} aria-label="Close">&#10005;</button>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 h-full w-full pb-12">
              <div className="w-full sm:w-2/5 min-w-[220px] flex flex-col mb-6 sm:mb-0">
                <div className="text-lg font-medium italic mb-2" style={{ fontFamily: 'Helvetica Neue Medium Italic, Helvetica Neue, Helvetica, Arial, sans-serif', fontStyle: 'italic' }}>{PAINTINGS[open].title}</div>
                <div className="text-sm mb-1" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                  {PAINTINGS[open].size}, {PAINTINGS[open].medium}, {PAINTINGS[open].year}
                </div>
                <div className="text-sm mb-1" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>{PAINTINGS[open].price}</div>
                {PAINTINGS[open].slug !== 'cupsof' && (
                  <a
                    href={`mailto:hello@timgreen.design?subject=${encodeURIComponent(PAINTINGS[open].title)}`}
                    className="inline-flex max-w-max mt-2 px-4 py-2 text-xs rounded-full bg-pink-100 text-gray-800 font-medium hover:bg-pink-200 transition"
                    style={{paddingTop:8,paddingBottom:8}}
                  >
                    Enquire now
                  </a>
                )}
                <button className="block mt-6 text-xs underline text-gray-500 self-start sm:self-auto" onClick={() => setOpen(null)}>Back to catalogue</button>
              </div>
              <ModalImages images={PAINTINGS[open].details} />
            </div>
          </div>
        </div>
      )}
      {/* Mobile-only footer contact/info block */}
      <div className="block sm:hidden mt-16 mb-8 px-4">
        <div className="text-2xl sm:text-3xl font-medium mb-2" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 500, marginBottom: '30px' }}>
          Feel free to get in touch if you&#39;d like more information about or want to purchase any of the paintings, either via{' '}
          <a href="mailto:hello@timgreen.design" className="underline decoration-dotted underline-offset-2">email</a> or{' '}
          <a href="https://www.instagram.com/timgreen.studio/" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted underline-offset-2">Instagram</a>.
        </div>
        <div className="flex flex-col w-full justify-between">
          <h1 className="text-5xl font-medium mb-2" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 500 }}>
            THE FORCE THAT DRIVES THE FLOWER
          </h1>
          <span className="text-2xl font-medium" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 500 }}>
            A series of oil paintings by <a href="https://www.instagram.com/timgreen.studio/" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted underline-offset-2 font-medium">Tim Green</a>.
          </span>
          <div className="flex flex-col items-start mt-8 gap-2 text-2xl font-medium" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 500 }}>
            <span>23 – 27 July</span>
            <span className="text-[#6B434C]">Private view 24 July 5 – 8pm</span>
            <a href="https://maps.google.com/?q=Three+Rooms+74+Beulah+Rd+London+E17+9LE" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted underline-offset-2">Three Rooms 74 Beulah Rd London E17 9LE</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ModalImages({ images }: { images: string[] }) {
  const [firstDims, setFirstDims] = React.useState<{ width: number; height: number } | null>(null);
  React.useEffect(() => {
    if (!images[0]) return;
    const img = new window.Image();
    img.onload = () => setFirstDims({ width: img.width, height: img.height });
    img.src = images[0];
  }, [images]);

  // Limit to 3 images on desktop, all on mobile
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 640;
  const imagesToShow = isDesktop ? images.slice(0, 3) : images;

  return (
    <div className="w-full sm:w-3/5 flex flex-col gap-4">
      <div className="w-full flex justify-center">
        {firstDims ? (
          <Image
            src={imagesToShow[0]}
            alt={`detail 1`}
            width={firstDims.width}
            height={firstDims.height}
            style={{ maxWidth: '100%', width: '100%', height: 'auto', display: 'block' }}
            priority
          />
        ) : null}
      </div>
      {imagesToShow.length > 1 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {imagesToShow.slice(1).map((img, i) => (
            <div key={img} className="w-full bg-gray-100 rounded-[4px] overflow-hidden min-w-[200px] flex items-center justify-center">
              <Image src={img} alt={`detail ${i+2}`} width={800} height={800} className="object-contain w-full h-auto" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
