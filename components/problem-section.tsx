import { AlertTriangle, Droplets } from "lucide-react"
import Image from "next/image"

export default function ProblemSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 font-montserrat">
              What's <span className="text-frenchblue">Wrong</span> With Reverse Osmosis Membranes?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here's why RO comes with a heavy price tag
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">
          {/* Left side - Image placeholder */}
          <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Reverse Osmosis Problems"
              fill
              className="object-cover"
            />
          </div>

          {/* Right side - Problem description with bullet points */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-frenchblue mr-2" />
                It's Energy-Hungry
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-frenchblue" />
                  <p>55% of total costs in the operation of RO plants is just for electricity.</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-frenchblue" />
                  <p>
                    Because of the inherent high energy requirement for SWRO desalination, seawater is not commonly
                    utilized over traditional surface water. (Kim et al., 2019)
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Droplets className="h-6 w-6 text-frenchblue mr-2" />
                It Has Low Water Permeability
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-frenchblue" />
                  <p>
                    RO membranes have low permeability rates—just 1–2 LMH/bar for seawater and 2–8 LMH/bar for brackish
                    water (Okamoto & Lienhard, 2019).
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-frenchblue" />
                  <p>This means you need even more pressure, more energy, and more money to get clean water.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
