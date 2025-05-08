"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-creamwhite">
      {/* Image Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/70 z-10" />
        <div
          className={`absolute inset-0 bg-creamwhite transition-opacity duration-1000 ${isLoaded ? "opacity-0" : "opacity-100"} z-20`}
        />
        <div className="absolute inset-0 z-0">
        <img src="assets/hero.jpg" alt="Hero image">
        </div>
      </div>

      {/* Hero Content */}
      <div className="container relative z-20 px-4 md:px-6 py-12 md:py-24">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 font-montserrat">
              Introducing <span className="text-frenchblue">AXiRA</span>
            </h1>
            <p className="max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed">
              Replacing Reverse Osmosis Membranes with Graphene Oxide Membranes
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/technology"
              className="inline-flex h-12 items-center justify-center rounded-md bg-frenchblue px-8 text-base font-medium text-white shadow transition-colors hover:bg-frenchblue/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-frenchblue"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
