import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/form/$form')({
  component: () => <div>Hello /form/$form!</div>,
})
