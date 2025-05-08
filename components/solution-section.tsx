import { useState } from "react"
import { CheckCircle, TrendingUp, Leaf } from "lucide-react"

export default function SolutionSection() {
  // Adding proper initialization for React component
  const [loaded, setLoaded] = useState(true)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 font-montserrat">
              Our <span className="text-blue-600">Solution</span>
            </h2>
            <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              How we're changing the game with Graphene Oxide technology
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent opacity-60" />
            <div className="relative p-6 sm:p-8 md:p-10">
              <TrendingUp className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lower Energy, Higher Impact</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-blue-600 shrink-0" />
                  <p className="text-gray-700">
                    Up to 50% less energy consumption compared to traditional reverse osmosis systems
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-blue-600 shrink-0" />
                  <p className="text-gray-700">
                    Reduces Operational costs by 27% and has anti fouling filters leading to a 
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent opacity-60" />
            <div className="relative p-6 sm:p-8 md:p-10">
              <Leaf className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ultra-Thin, Ultra-Effective</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-blue-600 shrink-0" />
                  <p className="text-gray-700">
                    GO membranes are incredibly thin, meaning water can flow at high speeds without clogging or damage
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-blue-600 shrink-0" />
                  <p className="text-gray-700">Has 14x the water flux/permeability of Reverse Osmosis Membranes</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
