import React from 'react';
import { CardContent, Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const Fonctionnalite: React.FC = () => {
    return (
        <div>
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
        </section>        </div>
    );
};

export default Fonctionnalite;