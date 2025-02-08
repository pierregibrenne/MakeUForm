import Footer from "./footer/Footer"
import Accroche from "@/features/homepage/Accroche"
import ProblemSection from "./ProblemSection"
import SolutionSection from "./SolutionSection"
import Testimonial from "./Testimonial"
import Fonctionnalite from "./Fonctionnalite"
import Pricing from "./Pricing"
import Call from "./Call"
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
        <Call />
      </main>
    <Footer />
    </div>
  )
}