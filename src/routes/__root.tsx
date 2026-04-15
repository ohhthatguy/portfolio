import Header from '#/components/HomePage/Header'
import Sidebar from '#/components/HomePage/Sidebar'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <Header />
      <div className="flex overflow-clip ">
        <Sidebar />
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  )
}
