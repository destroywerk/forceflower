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
    size: "100x50cm",
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
    size: "100x50cm",
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
    size: "100x50cm",
    medium: "Oil on canvas",
    year: "2024",
    price: "Not available (Courtesy of private collection, P. Vasili)",
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
    size: "51x101cm",
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
    size: "51x101cm",
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
    size: "51x101cm",
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
    size: "51x101cm",
    medium: "Oil on canvas",
    year: "2025",
    price: "£800",
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
    size: "25x50cm",
    medium: "Oil on canvas",
    year: "2025",
    price: "£600",
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
    size: "25x50cm",
    medium: "Oil on canvas",
    year: "2025",
    price: "£600",
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
    size: "25x50cm",
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
    size: "25x50cm",
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
    size: "30x60cm",
    medium: "Oil on canvas",
    year: "2024",
    price: "£600",
    description: null
  }
];

export default function GalleryPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-white text-black dark:bg-white dark:text-black px-4 pb-12 pt-8 sm:px-8 font-sans">
      <header className="w-full flex flex-col items-start mb-12">
        <h1 className="text-5xl sm:text-7xl font-medium mb-2" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 500 }}>
          THE FORCE THAT DRIVES THE FLOWER
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-end w-full justify-between">
          <span className="text-2xl sm:text-3xl font-medium" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 500 }}>
            A series of oil paintings by <a href="https://www.instagram.com/timgreen.studio/" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted underline-offset-2 font-medium">Tim Green</a>.
          </span>
          <div className="flex flex-col items-start sm:items-end mt-8 sm:mt-0 gap-2 text-2xl sm:text-3xl font-medium" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 500 }}>
            <span>23 – 27 July</span>
            <span className="text-[#6B434C]">Private view 24 July 5 – 8pm</span>
            <a href="https://maps.google.com/?q=Three+Rooms+74+Beulah+Rd+London+E17+9LE" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted underline-offset-2">Three Rooms 74 Beulah Rd London E17 9LE</a>
          </div>
        </div>
      </header>
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
