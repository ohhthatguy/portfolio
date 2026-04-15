// import Hero from '#/components/HomePage/Hero'
import Entry from '#/components/Entry'
import Sidebar from '#/components/HomePage/Sidebar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="flex overflow-clip ">
      <Sidebar />
      <Entry />
    </div>
  )
}
