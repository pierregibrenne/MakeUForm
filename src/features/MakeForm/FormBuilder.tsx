import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Copy,
  ImageIcon,
  MoreVertical,
  Plus,
  Trash2,
  Type,
  CheckSquare,
  AlignLeft,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { motion } from 'framer-motion'

export default function Component() {
  const [options, setOptions] = useState(['Option 1'])
  const [isRequired, setIsRequired] = useState(false)

  const addOption = () => {
    setOptions([...options, `Option ${options.length + 1}`])
  }

  return (
    <div className="min-h-screen w-full bg-[#F8F9FC] p-8 "> {/* Updated background color */}
      <div className="max-w-3xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-t-4 border-t-primary shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 space-y-4">
              <Input 
                className="text-3xl font-bold border-none px-0 focus-visible:ring-0 bg-transparent" 
                placeholder="Formulaire sans titre" 
              />
              <Input 
                className="text-lg border-none px-0 focus-visible:ring-0 resize-none bg-transparent min-h-[80px] overflow-y-auto" 
                placeholder="Description du formulaire"
                type="text"
                multiline
                rows={2}
              />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="shadow-md hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <Input
                    className="text-xl font-semibold border-none px-0 focus-visible:ring-0 bg-transparent"
                    placeholder="Question sans titre"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <Select defaultValue="multiple">
                    <SelectTrigger className="w-[180px] bg-white/50 backdrop-blur-sm">
                      <SelectValue placeholder="Type de question" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="multiple">
                        <div className="flex items-center">
                          <Type className="w-4 h-4 mr-2" />
                          Choix multiples
                        </div>
                      </SelectItem>
                      <SelectItem value="checkbox">
                        <div className="flex items-center">
                          <CheckSquare className="w-4 h-4 mr-2" />
                          Cases à cocher
                        </div>
                      </SelectItem>
                      <SelectItem value="short">
                        <div className="flex items-center">
                          <AlignLeft className="w-4 h-4 mr-2" />
                          Réponse courte
                        </div>
                      </SelectItem>
                      <SelectItem value="long">
                        <div className="flex items-center">
                          <AlignLeft className="w-4 h-4 mr-2" />
                          Paragraphe
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <ImageIcon className="h-5 w-5" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <MoreVertical className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Copy className="h-4 w-4 mr-2" />
                        Dupliquer
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Supprimer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <div className="space-y-3 pl-6">
                {options.map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="h-5 w-5 rounded-full border-2 border-primary mt-3" />
                    <Input
                      className="border-none focus-visible:ring-0 bg-white/50 backdrop-blur-sm"
                      placeholder={option}
                    />
                  </motion.div>
                ))}
                <Button
                  variant="ghost"
                  className="text-primary hover:text-primary/80 transition-colors"
                  onClick={addOption}
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Ajouter une option
                </Button>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Copy className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
                <div className="flex items-center gap-3">
                  <Label htmlFor="required" className="text-sm font-medium">Obligatoire</Label>
                  <Switch
                    id="required"
                    checked={isRequired}
                    onCheckedChange={setIsRequired}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-end gap-3"
        >
          <Button variant="outline" className="rounded-full px-6">Aperçu</Button>
          <Button className="rounded-full px-6">Enregistrer</Button>
        </motion.div>
      </div>
    </div>
  )
}