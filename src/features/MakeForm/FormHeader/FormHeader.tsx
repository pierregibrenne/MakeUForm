import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function FormHeader() {
  return (
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
          <Textarea
            className="text-lg border-none px-0 focus-visible:ring-0 resize-none bg-transparent min-h-[80px] overflow-y-auto"
            placeholder="Description du formulaire"
            rows={2}
          />
        </CardContent>
      </Card>
    </motion.div>
  )
}