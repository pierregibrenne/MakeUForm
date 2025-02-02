import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardContent, Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Footer from "./footer/Footer"
import Accroche from "@/features/homepage/Accroche"
import ProblemSection from "./ProblemSection"
import SolutionSection from "./SolutionSection"
import Testimonial from "./Testimonial"
import Fonctionnalite from "./Fonctionnalite"
import Pricing from "./Pricing"
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <Accroche />
        <ProblemSection />
        <SolutionSection />
        <Fonctionnalite />
        <Testimonial />
        <Pricing />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Prêt à booster votre productivité ?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Rejoignez des milliers d'entreprises qui ont déjà transformé leur façon de travailler.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Entrez votre email" type="email" />
                  <Button type="submit">
                    S'inscrire
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  En vous inscrivant, vous acceptez nos{" "}
                  <a className="underline underline-offset-2" href="#">
                    Conditions d'utilisation
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    <Footer />
    </div>
  )
}