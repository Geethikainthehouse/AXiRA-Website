"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function MainNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-2xl font-bold text-gray-900 font-montserrat">AXiRA</span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-frenchblue transition-colors">
              Home
            </Link>
            <Link
              href="/technology"
              className="text-sm font-medium text-gray-700 hover:text-frenchblue transition-colors"
            >
              Technology
            </Link>
            <Link href="/content" className="text-sm font-medium text-gray-700 hover:text-frenchblue transition-colors">
              Media
            </Link>
          </div>
          <div>
            <Link
              href="/#team"
              className="inline-flex h-9 items-center justify-center rounded-md border border-frenchblue px-4 text-sm font-medium text-frenchblue shadow transition-colors hover:bg-frenchblue hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-frenchblue"
            >
              Contact Us
            </Link>
          </div>
        </nav>
        <div className="flex md:hidden ml-auto">
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-frenchblue"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open menu</span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-40 bg-white/90 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                <span className="text-2xl font-bold text-gray-900 font-montserrat">AXiRA</span>
              </Link>
              <button
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-frenchblue"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
              <Link
                href="/"
                className="text-base font-medium text-gray-700 hover:text-frenchblue"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/technology"
                className="text-base font-medium text-gray-700 hover:text-frenchblue"
                onClick={() => setIsOpen(false)}
              >
                Technology
              </Link>
              <Link
                href="/content"
                className="text-base font-medium text-gray-700 hover:text-frenchblue"
                onClick={() => setIsOpen(false)}
              >
                Media
              </Link>
              <Link
                href="/#team"
                className="inline-flex h-10 w-full items-center justify-center rounded-md bg-frenchblue px-4 text-sm font-medium text-white shadow transition-colors hover:bg-frenchblue/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-frenchblue"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
