import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardContent, Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Footer from "./footer/Footer"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Créez ton formulaire 📝 pour ton asso
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Vous allez avoir de la data les enfants 
                </p>
              </div>
              <div className="space-x-4">
                <Button>Commencer gratuitement</Button>
                <Button variant="outline">En savoir plus</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Nos fonctionnalités</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardContent className="mt-4">
                  <CheckCircle2 className="h-10 w-10 mb-4 text-green-500" />
                  <h3 className="text-lg font-bold mb-2">Automatisation intelligente</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Automatisez vos tâches répétitives et gagnez du temps précieux.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="mt-4">
                  <CheckCircle2 className="h-10 w-10 mb-4 text-green-500" />
                  <h3 className="text-lg font-bold mb-2">Analyses en temps réel</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Obtenez des insights précieux sur vos performances en un clin d'œil.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="mt-4">
                  <CheckCircle2 className="h-10 w-10 mb-4 text-green-500" />
                  <h3 className="text-lg font-bold mb-2">Collaboration simplifiée</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Travaillez efficacement en équipe, où que vous soyez.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Nos tarifs</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Basique</h3>
                  <p className="text-4xl font-bold mb-4">19€ <span className="text-sm font-normal">/mois</span></p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                      Fonctionnalités de base
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                      Jusqu'à 5 utilisateurs
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                      Support par email
                    </li>
                  </ul>
                  <Button className="w-full">Choisir le plan</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Pro</h3>
                  <p className="text-4xl font-bold mb-4">49€ <span className="text-sm font-normal">/mois</span></p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                      Toutes les fonctionnalités Basique
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                      Jusqu'à 20 utilisateurs
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                      Support prioritaire
                    </li>
                  </ul>
                  <Button className="w-full">Choisir le plan</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Entreprise</h3>
                  <p className="text-4xl font-bold mb-4">Sur devis</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                      Toutes les fonctionnalités Pro
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                      Utilisateurs illimités
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                      Support dédié 24/7
                    </li>
                  </ul>
                  <Button className="w-full">Nous contacter</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
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