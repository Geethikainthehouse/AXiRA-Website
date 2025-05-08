import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, FileText, Video, FileSpreadsheet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ContentPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <Link href="/">
          <Button variant="ghost" className="text-gray-400 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
      </div>

      <section className="container mx-auto px-4 py-12">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
          Content <span className="text-neon-violet">Hub</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mb-24">
          Explore our research papers, case studies, educational materials, and more about AXiRA's revolutionary
          graphene oxide membrane technology.
        </p>

        <div className="mb-24">
          <div className="relative overflow-hidden rounded-2xl mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-violet/20 z-10"></div>
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Featured article cover"
              width={1200}
              height={600}
              className="w-full h-[60vh] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-black to-transparent">
              <div className="inline-block bg-neon-violet/90 text-white px-3 py-1 rounded-full text-sm mb-4">
                Featured Article
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
                The Graphene Revolution: How GO Membranes Are Changing Water Filtration
              </h2>
              <p className="text-gray-200 mb-6 max-w-3xl">
                An in-depth look at how graphene oxide membranes are outperforming traditional reverse osmosis
                technology across efficiency, durability, and environmental impact metrics.
              </p>
              <Button className="bg-neon-violet hover:bg-neon-violet/80 text-white">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="bg-gray-900 border border-gray-800">
            <TabsTrigger value="all">All Content</TabsTrigger>
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="data">Data & Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <ContentCard key={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="articles" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <ContentCard key={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="research" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2].map((item) => (
                <ContentCard key={item} type="research" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1].map((item) => (
                <ContentCard key={item} type="video" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="data" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2].map((item) => (
                <ContentCard key={item} type="data" />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold font-display">AXiRA</h3>
              <p className="text-gray-400 mt-2">The future of water filtration</p>
            </div>
            <div className="flex space-x-8">
              <Link href="/tech" className="text-gray-300 hover:text-neon-blue transition-colors">
                Technology
              </Link>
              <Link href="/content" className="text-gray-300 hover:text-neon-blue transition-colors">
                Content
              </Link>
              <Link href="/testimonials" className="text-gray-300 hover:text-neon-blue transition-colors">
                Testimonials
              </Link>
              <Link href="/team" className="text-gray-300 hover:text-neon-blue transition-colors">
                Team
              </Link>
            </div>
          </div>
          <div className="mt-12 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} AXiRA. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}

function ContentCard({ type = "article" }) {
  const getIcon = () => {
    switch (type) {
      case "video":
        return <Video className="h-5 w-5" />
      case "research":
        return <FileText className="h-5 w-5" />
      case "data":
        return <FileSpreadsheet className="h-5 w-5" />
      default:
        return <FileText className="h-5 w-5" />
    }
  }

  const getTitle = () => {
    switch (type) {
      case "video":
        return "AXiRA Technology Explained"
      case "research":
        return "Graphene Oxide Membrane Performance Study"
      case "data":
        return "Comparative Efficiency Data Report"
      default:
        return "The Future of Water Filtration with GO Membranes"
    }
  }

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 group hover:border-neon-violet transition-all duration-300">
      <div className="relative h-48">
        <Image
          src="/placeholder.svg?height=300&width=500"
          alt="Content thumbnail"
          width={500}
          height={300}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs flex items-center gap-2">
          {getIcon()}
          <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-neon-violet transition-colors">{getTitle()}</h3>
        <p className="text-gray-400 text-sm mb-4">
          An exploration of how AXiRA's technology is revolutionizing the water filtration industry.
        </p>
        <Button variant="ghost" className="text-neon-violet hover:text-neon-violet/80 p-0 h-auto">
          Read More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
