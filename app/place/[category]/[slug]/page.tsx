"use client"

import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Smartphone } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { use } from "react"
import { placesData } from "@/data/places"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Add this interface to define the section structure
interface PlaceSection {
  title: string;
  content: string;
  image?: string;
}

export default function PlacePage({ params }: { params: { category: string; slug: string } }) {
  const router = useRouter()
  // Fix the TypeScript error by using a different approach to typing
  const unwrappedParams = use(params as unknown as Promise<{ category: string; slug: string }>)
  const { category, slug } = unwrappedParams
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Get place data based on category and slug
  // Update getPlaceData to use the imported data
  const getPlaceData = () => {
    return (
      (placesData[category] && placesData[category][slug]) || {
        name: "Place Not Found",
        title: "Place Not Found",
        heroImage: "/placeholder.svg?height=800&width=1600",
        description: "The requested place does not exist.",
        sections: [],
        facts: [],
        tips: [],
        hasARModel: false,
      }
    )
  }

  const placeData = getPlaceData()

  useEffect(() => {
    // Parallax effect for the hero image
    if (headerRef.current) {
      gsap.to(headerRef.current.querySelector(".parallax-bg"), {
        y: "30%",
        ease: "none",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
    }

    // Animate sections as they come into view
    if (contentRef.current) {
      // Animate section titles
      gsap.from(".section-title", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".section-title",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })

      // Animate section content
      gsap.from(".section-content", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".section-content",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })

      // Animate section images
      gsap.from(".section-image", {
        opacity: 0,
        x: 50,
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
          trigger: ".section-image",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })

      // Animate facts and tips
      gsap.from(".fact-item", {
        opacity: 0,
        x: -30,
        stagger: 0.1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".facts-section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })

      gsap.from(".tip-item", {
        opacity: 0,
        x: 30,
        stagger: 0.1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".tips-section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      {/* Parallax Hero Section */}
      <div ref={headerRef} className="relative h-screen overflow-hidden">
        <div
          className="parallax-bg absolute inset-0 w-full h-[120%] bg-cover bg-center"
          style={{ backgroundImage: `url(${placeData.heroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>

        {/* Back button */}
        <div className="absolute top-6 left-6 z-10">
          <button
            onClick={() => router.push(`/category/${category}`)}
            className="flex items-center gap-2 text-white hover:text-amber-300 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-josefin">Back to {category.charAt(0).toUpperCase() + category.slice(1)}</span>
          </button>
        </div>

        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white font-josefin drop-shadow-lg max-w-4xl">
            {placeData.title}
          </h1>
          <p className="text-lg md:text-xl text-amber-100 max-w-2xl drop-shadow-md mb-8">{placeData.description}</p>

          {placeData.hasARModel && (
            <Link href={`/place/${category}/${slug}/ar`}>
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white rounded-full font-josefin shadow-lg transition-all hover:scale-105">
                <Smartphone size={20} />
                View in AR
              </button>
            </Link>
          )}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
          <p className="text-sm mb-2 font-josefin">Scroll to explore</p>
          <div className="animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div ref={contentRef} className="max-w-5xl mx-auto px-4 py-16">
        {placeData.sections.map((section: PlaceSection, index: number) => (
          <div
            key={index}
            className={`mb-20 flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-8 items-center`}
          >
            <div className="md:w-1/2">
              <h2 className="section-title text-3xl font-bold mb-6 text-amber-900 font-josefin">{section.title}</h2>
              <p className="section-content text-lg text-amber-800">{section.content}</p>
            </div>
            <div className="md:w-1/2">
              <img
                src={section.image || "/placeholder.svg"}
                alt={section.title}
                className="section-image w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}

        {/* Facts and Tips Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* Facts */}
          <div className="facts-section bg-amber-100 rounded-lg p-6 shadow-md border border-amber-200">
            <h3 className="text-2xl font-bold mb-6 text-amber-900 font-josefin">Interesting Facts</h3>
            <ul className="space-y-3">
              {placeData.facts.map((fact: string, index: number) => (
                <li key={index} className="fact-item flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span className="text-amber-800">{fact}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tips */}
          <div className="tips-section bg-amber-100 rounded-lg p-6 shadow-md border border-amber-200">
            <h3 className="text-2xl font-bold mb-6 text-amber-900 font-josefin">Travel Tips</h3>
            <ul className="space-y-3">
              {placeData.tips.map((tip: string, index: number) => (
                <li key={index} className="tip-item flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span className="text-amber-800">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
