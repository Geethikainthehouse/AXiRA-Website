import Link from "next/link"
import Image from "next/image";

import MainNav from "@/components/main-nav"

export default function TechnologyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-creamwhite">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            {/* Left Side Text */}
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 font-heading">
                  The Power of <span className="text-frenchblue">AXiRA</span>
                </h1>
                <p className="max-w-[600px] text-gray-700 md:text-xl">
                  Our revolutionary approach to water filtration leverages the unique properties of Graphene Oxide to
                  create more efficient, sustainable solutions.
                </p>
              </div>
            </div>

            {/* Right Side Image Placeholder */}
            <div className="flex items-center justify-center">
              <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] bg-gray-200 rounded-xl border border-gray-300 flex items-center justify-center relative">
                <Image
                  src="/placeholder.svg" // Replace with your image path
                  alt="Graphene Oxide Illustration"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stages */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 font-heading">
                Technology <span className="text-frenchblue">Stages</span>
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore each stage of our advanced filtration process
              </p>
            </div>
          </div>

          <div className="grid gap-8 mt-12 md:grid-cols-3">
            {/* Stage 1 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="mb-4 h-12 w-12 rounded-full bg-frenchblue/10 flex items-center justify-center">
                <span className="text-frenchblue font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pre-treatment Stage</h3>
              <p className="text-gray-600 mb-4">
                A biodegradable nanofiber mesh that removes contaminants, resists fouling, and improves membrane lifespan—powered by chitosan from seafood waste and stabilized using plant-based genipin. 🌱💧
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-frenchblue" />
                  <p>70–80% fouling reduction before AXiRA GO membrane</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-frenchblue" />
                  <p>95% E. coli & 80% dye removal via nanofiltration</p>
                </li>
              </ul>
            </div>

            {/* Stage 2 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="mb-4 h-12 w-12 rounded-full bg-frenchblue/10 flex items-center justify-center">
                <span className="text-frenchblue font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">GO Membrane Filtration</h3>
              <p className="text-gray-600 mb-4">
                AXiRA uses self-healing Graphene Oxide membranes supported by MXenes to deliver ultra-fast water filtration with minimal maintenance, long lifespan, and smart sensing for real-time durability and performance.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-frenchblue" />
                  <p>99%+ Salt Rejection & 100 LMH/Bar Water Flux</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-frenchblue" />
                  <p>95% Recovery in water flux post-damage</p>
                </li>
              </ul>
            </div>

            {/* Stage 3 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="mb-4 h-12 w-12 rounded-full bg-frenchblue/10 flex items-center justify-center">
                <span className="text-frenchblue font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Post-filtration Stage</h3>
              <p className="text-gray-600 mb-4">Water undergoes UV sterilization and mineral balancing, ensuring it's microbially safe, palatable, and enriched with essential minerals like calcium and magnesium for health and taste.</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-frenchblue" />
                  <p>Bacteria and viruses eliminated</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-frenchblue" />
                  <p>Mineral balancing for improved taste</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-creamwhite">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 font-heading">
                Performance <span className="text-frenchblue">Comparison</span>
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See how our Graphene Oxide technology compares to traditional filtration methods
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-md">
              <div className="bg-white p-6">
                <div className="grid grid-cols-3 gap-4 border-b border-gray-200 pb-4">
                  <div className="col-span-1"></div>
                  <div className="col-span-1 text-center font-bold text-gray-900">AXiRA GO</div>
                  <div className="col-span-1 text-center font-bold text-gray-900">Reverse Osmosis</div>
                </div>

                <div className="grid grid-cols-3 gap-4 border-b border-gray-200 py-4">
                  <div className="col-span-1 font-medium text-gray-900">Energy Usage</div>
                  <div className="col-span-1 text-center text-frenchblue">Very Low</div>
                  <div className="col-span-1 text-center text-gray-700">High</div>
                </div>

                <div className="grid grid-cols-3 gap-4 border-b border-gray-200 py-4">
                  <div className="col-span-1 font-medium text-gray-900">Filtration Quality</div>
                  <div className="col-span-1 text-center text-frenchblue">Fast</div>
                  <div className="col-span-1 text-center text-gray-700">Good</div>
                </div>

                <div className="grid grid-cols-3 gap-4 border-b border-gray-200 py-4">
                  <div className="col-span-1 font-medium text-gray-900">Lifespan</div>
                  <div className="col-span-1 text-center text-frenchblue">Longer (due to anti fouling)</div>
                  <div className="col-span-1 text-center text-gray-700">Short</div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-4">
                  <div className="col-span-1 font-medium text-gray-900">Cost</div>
                  <div className="col-span-1 text-center text-frenchblue">Cheap</div>
                  <div className="col-span-1 text-center text-gray-700">Expensive</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 font-heading">
                Explore <span className="text-frenchblue">Articles</span> and more on AXiRA
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out some of our exclusive content explaining the Technology
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/content"
                className="inline-flex h-10 items-center justify-center rounded-md border border-frenchblue px-8 text-sm font-medium text-frenchblue shadow transition-colors hover:bg-frenchblue hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-frenchblue"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-creamwhite border-t border-gray-200">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">AXiRA</h3>
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

