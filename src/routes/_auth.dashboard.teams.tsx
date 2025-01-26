import { createFileRoute } from '@tanstack/react-router'
import Teams from '@/features/Teams/Teams'
export const Route = createFileRoute('/_auth/dashboard/teams')({
  component: Teams,
})
