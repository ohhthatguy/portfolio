import Hero from '#/components/HomePage/Hero'
import Sidebar from '#/components/HomePage/Sidebar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="flex overflow-clip ">
      <Hero />
      <Sidebar />
    </div>
  )
}
