// FormControls.jsx
export default  function FormControls({ isRequired, onSetIsRequired }) {
    return (
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon"><Copy /></Button>
          <Button variant="ghost" size="icon"><Trash2 /></Button>
        </div>
        <div className="flex items-center gap-3">
          <Label htmlFor="required">Obligatoire</Label>
          <Switch
            id="required"
            checked={isRequired}
            onCheckedChange={onSetIsRequired}
          />
        </div>
      </div>
    );
  }
  