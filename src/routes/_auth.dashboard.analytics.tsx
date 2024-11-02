import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/dashboard/analytics')({
  component: () => <div>Hello /_auth/dashboard/analytics!</div>,
})
