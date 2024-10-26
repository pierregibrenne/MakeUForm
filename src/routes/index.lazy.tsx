import { createLazyFileRoute } from '@tanstack/react-router'
import  HomePage from '@/features/homepage/HomePage'
export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <HomePage />
    </div>
  )
}