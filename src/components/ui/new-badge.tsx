import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface NewBadgeProps {
  text: string
  className?: string
}

export function NewBadge({ text, className }: NewBadgeProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="font-medium">{text}</span>
      <Badge variant="secondary" className="bg-[#84cc16]/20 text-[#84cc16] hover:bg-[#84cc16]/20 hover:text-[#84cc16]">
        New
      </Badge>
    </div>
  )
}

