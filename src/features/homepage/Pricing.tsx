import React from 'react';
import {  CheckCircle2 } from "lucide-react"
import { CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Pricing: React.FC = () => {
    return (
        <div>
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
        </section>        </div>
    );
};

export default Pricing;