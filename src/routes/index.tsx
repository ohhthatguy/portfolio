// import Hero from '#/components/HomePage/Hero'
import Entry from '#/components/Entry'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <>
      <Entry />
    </>
  )
}
