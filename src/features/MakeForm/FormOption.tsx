import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Copy, Trash2 } from 'lucide-react'

export default function FormControls({ isRequired, onSetIsRequired }) {
  return (
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
          onCheckedChange={onSetIsRequired}
        />
      </div>
    </div>
  );
}
