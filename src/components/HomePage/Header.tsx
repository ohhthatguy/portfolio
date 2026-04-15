import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { CgWebsite } from 'react-icons/cg'
import { FaGraduationCap, FaHome } from 'react-icons/fa'
import { IoMdMan } from 'react-icons/io'
import { IoBagSharp } from 'react-icons/io5'
import { MdGrade } from 'react-icons/md'

const Header = () => {
  const [headerState, setHeaderState] = useState<boolean>(false)
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })

      setHeaderState(false)
    }
  }
  return (
    <div className="flex relative justify-between h-16 items-center bg-secondary_color w-full  shadow-2xl">
      <a
        href="#hero_page"
        onClick={(e) => {
          e.preventDefault()
          scrollToSection('hero_page')
        }}
        className=" hover:cursor-pointer "
      >
        <div className="bg-[url('/bhaskar_logo.png')] h-16 w-40 bg-center bg-cover"></div>
      </a>

      <div
        className={`absolute z-50 bg-secondary_color overflow-hidden  right-0 top-0 w-40 md:hidden ${headerState ? 'block' : 'hidden'} h-screen`}
      >
        <div className="flex absolute  justify-center top-4 left-8 w-full items-center">
          <X className="border" onClick={() => setHeaderState(false)} />
        </div>
        {/* <div className="grid  h-full place-content-evenly">
          {headerNavData.map((e: string, index: number) => (
            <div
              key={index}
              onClick={() => setHeaderState(false)}
              className="nav_items "
            >
              {e}
            </div>
          ))}
        </div> */}

        {/* <div className="grid  h-full place-content-evenly">
          <a
            href="#hero_page"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('hero_page')
            }}
            className="nav_items "
          >
            HOME
          </a>
          <a
            href="#exp_page"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('exp_page')
            }}
            className="nav_items"
          >
            EXPERIENCE
          </a>

          <a
            href="#project_page"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('project_page')
            }}
            className="nav_items "
          >
            PROJECTS
          </a>
          <a
            href="#skill_page"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('skill_page')
            }}
            className="nav_items"
          >
            SKILLS
          </a>

          <a
            href="#edu_page"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('edu_page')
            }}
            className="nav_items"
          >
            EDUCATION
          </a>
          <a
            href="#footer_page"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('footer_page')
            }}
            className="nav_items"
          >
            About
          </a>
        </div> */}

        <div className="grid  h-full place-content-evenly text-unmuted_color">
          <a
            href="#hero_page"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('hero_page')
            }}
            className="nav_items flex gap-2 items-center"
          >
            <FaHome size={18} />
            HOME
          </a>
          <a
            href="#exp_page"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('exp_page')
            }}
            className="nav_items flex gap-2 items-center"
          >
            <IoBagSharp size={18} />
            EXPERIENCE
          </a>

          <a
            href="#project_page"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('project_page')
            }}
            className="nav_items flex gap-2 items-center"
          >
            <CgWebsite size={18} />
            PROJECTS
          </a>
          <a
            href="#skill_page"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('skill_page')
            }}
            className="nav_items flex gap-2 items-center"
          >
            <MdGrade size={18} />
            SKILLS
          </a>

          <a
            href="#edu_page"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('edu_page')
            }}
            className="nav_items flex gap-2 items-center"
          >
            <FaGraduationCap size={18} />
            EDUCATION
          </a>
          <a
            href="#footer_page"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('footer_page')
            }}
            className="nav_items flex gap-2 items-center"
          >
            <IoMdMan size={18} />
            About
          </a>
        </div>
      </div>

      <div className=" hover:cursor-pointer mr-8 mb-1 border md:hidden">
        <Menu onClick={() => setHeaderState((prev) => !prev)} />
      </div>
    </div>
  )
}

export default Header
