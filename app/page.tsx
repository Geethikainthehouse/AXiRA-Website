import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import HeroSection from "@/components/hero-section"
import ProblemSection from "@/components/problem-section"
import SolutionSection from "@/components/solution-section"
import MainNav from "@/components/main-nav"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      {/* Hero Section */}
      <HeroSection />

      {/* Problem Section */}
      <ProblemSection />

      {/* Solution Section */}
      <SolutionSection />

      {/* Technology Preview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                Explore <span className="text-frenchblue">AXiRA</span>
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover how our Graphene Oxide technology is revolutionizing water filtration systems
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <div className="flex justify-center">
                <Link
                  href="/technology"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-frenchblue px-8 text-sm font-medium text-white shadow transition-colors hover:bg-frenchblue/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-frenchblue"
                >
                  Explore AXiRA
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-creamwhite">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                What <span className="text-frenchblue">Experts Say</span>
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from industry leaders who have validated our Graphene Oxide technology
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 flex max-w-5xl snap-x snap-mandatory gap-6 overflow-x-auto pb-8">
            <div className="min-w-[300px] snap-center sm:min-w-[350px] md:min-w-[400px]">
              <Card className="h-full bg-white border-gray-200 text-gray-900 shadow-md">
                <div className="p-6">
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-frenchblue flex items-center justify-center text-white font-bold">
                      GY
                    </div>
                    <div>
                      <p className="font-bold hover:text-frenchblue transition-colors">
                        Dr. Guihua Yu
                      </p>
                      <p className="text-sm text-gray-600">Affiliated with University of Texas at Austin</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-700">
                      "(Graphene Oxide Filtration Membranes) is a very innovative approach that effectively mitigates key challenges in the field of desalination. The design is particularly beneficial for regions struggling with high-salinity water. Its modular design makes it highly suitable for household water production, allowing for scalability and adaptability to meet individual needs"
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="min-w-[300px] snap-center sm:min-w-[350px] md:min-w-[400px]">
              <Card className="h-full bg-white border-gray-200 text-gray-900 shadow-md">
                <div className="p-6">
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-frenchblue flex items-center justify-center text-white font-bold">
                      DS
                    </div>
                    <div>
                    <p className="font-bold hover:text-frenchblue transition-colors">
                        Professor David L. Sedlak
                      </p>
                      <p className="text-sm text-gray-600">SUniversity of California, Berkeley</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-700">
                      "Membranes made from graphene or graphene oxide can more effectively remove wastewater contaminants — including pharmaceuticals, pathogens, and endocrine disruptors — than current methods and can be applied to wastewater reuse, water desalinization, and storm water treatment"
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="min-w-[300px] snap-center sm:min-w-[350px] md:min-w-[400px]">
              <Card className="h-full bg-white border-gray-200 text-gray-900 shadow-md">
                <div className="p-6">
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-frenchblue flex items-center justify-center text-white font-bold">
                      RP
                    </div>
                    <div>
                      <p className="font-bold hover:text-frenchblue transition-colors">
                        Roni Peleg
                      </p>
                      <p className="text-sm text-gray-600">Editor In Chief at Graphene Info</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-700">
                      "The use of graphene oxide filters gave a higher efficiency in eliminating arsenic and fluoride from water as compared to filters without graphene oxide."
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Content Hub Preview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                Latest <span className="text-frenchblue">Insights</span>
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our latest articles, research, and media about Graphene Oxide technology
              </p>
            </div>
          </div>

          {/* Media Feature Article Style */}
          <div className="mx-auto mt-12 max-w-6xl">
            <Card className="overflow-hidden bg-white border-gray-200 shadow-md">
              <div className="relative">
                {/* Full-width hero image */}
                <div className="relative w-full h-[400px]">
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent z-10" />
                  <Image
                    src="/placeholder.svg"
                    alt="Featured article"
                    fill={true}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 z-20 rounded-full bg-frenchblue px-3 py-1 text-xs font-bold text-white">
                    Featured Article
                  </div>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-10">
                  <div className="space-y-4 max-w-3xl">
                    <p className="text-sm text-frenchblue">Explainer</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      Axira 101: The Science Behind Smarter Filtration
                    </h2>
                    <p className="text-lg text-gray-700">
                      Exploring the Limitations of RO and the Promise of Graphene Oxide
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>May 8, 2025</span>
                      <span className="mx-2">•</span>
                      <span>10 min read</span>
                    </div>
                    <div className="mt-6">
                      <Link
                        href="https://your-article-link.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-frenchblue text-white hover:bg-frenchblue/90">
                          Read Full Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Link
              href="/content"
              className="inline-flex h-10 items-center justify-center rounded-md bg-frenchblue px-8 text-sm font-medium text-white shadow transition-colors hover:bg-frenchblue/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-frenchblue"
            >
              Explore All Content
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-creamwhite">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 font-montserrat">
                Meet Our <span className="text-frenchblue">Team</span>
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The team behind AXiRA's Graphene Oxide technology
              </p>
            </div>
          </div>

          {/* Team Members Section - Fixed Implementation */}
          <div className="container px-4 md:px-6 mt-12">
            <div className="grid gap-10 md:grid-cols-2">
              {/* Team Member 1 */}
              <div className="rounded-xl overflow-hidden border-2 border-gray-200 bg-white shadow-md">
                <div className="p-6 flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col items-center md:w-1/3">
                    <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden border-4 border-frenchblue/30 shadow-md">
                      <Image
                        src="/placeholder.svg"
                        alt="Geethika N"
                        fill={true}
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 160px"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 font-montserrat text-center">Geethika N</h3>
                    <p className="text-lg text-frenchblue text-center">Co-Founder</p>

                    <div className="flex justify-center space-x-4 mt-4">
                      <Link
                        href="https://v0-geethika-website-design-cmoa6n.vercel.app/"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-frenchblue hover:bg-frenchblue hover:text-white transition-all duration-300"
                      >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                      </Link>
                      <Link
                        href="https://www.linkedin.com/in/geethika-n-56a501287/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-frenchblue hover:bg-frenchblue hover:text-white transition-all duration-300"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                      <Link
                        href="https://x.com/yosugeehere"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-frenchblue hover:bg-frenchblue hover:text-white transition-all duration-300"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-6">
                      15 y/o from Chennai exploring AR, building random side projects, and writing at Cercora
                    </p>
                  </div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="rounded-xl overflow-hidden border-2 border-gray-200 bg-white shadow-md">
                <div className="p-6 flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col items-center md:w-1/3">
                    <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden border-4 border-frenchblue/30 shadow-md">
                      <Image
                        src="/placeholder.svg"
                        alt="Layla Rahmanian"
                        fill={true}
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 160px"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 font-montserrat text-center">
                      Layla Rahmanian
                    </h3>
                    <p className="text-lg text-frenchblue text-center">Co-Founder</p>

                    <div className="flex justify-center space-x-4 mt-4">
                      <Link
                        href="laylarahmanian@gmail.com"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-frenchblue hover:bg-frenchblue hover:text-white transition-all duration-300"
                      >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                      </Link>
                      <Link
                        href="https://www.linkedin.com/in/layla-rahmanian-001768332/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-frenchblue hover:bg-frenchblue hover:text-white transition-all duration-300"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                      <Link
                        href="https://twitter.com/layla_axira"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-frenchblue hover:bg-frenchblue hover:text-white transition-all duration-300"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-6">
                      15 y/o from Detroit, Michigan interested in synthetic bio, the arts, and building the future of genetic care
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-creamwhite border-t border-gray-200">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-2 font-montserrat">AXiRA</h3>
            <p className="text-sm text-gray-600">Revolutionizing the future with Graphene Oxide technology.</p>
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>© 2025 AXiRA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
