import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { headerNavData } from './data/headerData'

const Header = () => {
  const [headerState, setHeaderState] = useState<boolean>(false)
  return (
    <div className="flex justify-between h-16 items-center bg-secondary_color w-full fixed shadow-2xl">
      <div className="  ">
        <div className="bg-[url('/bhaskar_logo.png')] h-16 w-40 bg-center bg-cover"></div>
      </div>

      <div
        className={`absolute bg-secondary_color right-0 top-0 w-40 md:hidden ${headerState ? 'block' : 'hidden'} h-screen`}
      >
        <div className="flex absolute  w-full justify-end">
          <X onClick={() => setHeaderState(false)} />
        </div>
        <div className="grid  h-full place-content-evenly">
          {headerNavData.map((e: string, index: number) => (
            <div
              key={index}
              onClick={() => setHeaderState(false)}
              className="nav_items "
            >
              {e}
            </div>
          ))}
        </div>
      </div>

      <div className=" hover:cursor-pointer mr-8 mb-1 md:hidden">
        <Menu onClick={() => setHeaderState((prev) => !prev)} />
      </div>
    </div>
  )
}

export default Header
