import { useLocation, useNavigate } from '@tanstack/react-router'
import { CgWebsite } from 'react-icons/cg'
import { FaGraduationCap, FaHome } from 'react-icons/fa'
import { IoMdMan } from 'react-icons/io'
import { IoBagSharp } from 'react-icons/io5'
import { MdGrade } from 'react-icons/md'

const Sidebar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = (
    id: string,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (location.pathname !== '/') {
      navigate({ to: '/' })
      const element = document.getElementById(id)
      element?.scrollIntoView({ behavior: 'smooth' })
      const allNavEle = document.querySelectorAll('.nav_items')
      allNavEle.forEach((ele) => ele.classList.remove('nav_clicked_class'))
      e.currentTarget.classList.add('nav_clicked_class')
    }

    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })

      const allNavEle = document.querySelectorAll('.nav_items')
      allNavEle.forEach((ele) => ele.classList.remove('nav_clicked_class'))
      e.currentTarget.classList.add('nav_clicked_class')
    }
  }

  return (
    <div className="md:flex-1 hidden md:block bg-secondary_color  max-w-40 relative">
      {/* <div className=" absolute right-0 top-0 w-40  h-screen"> */}
      <div className="grid  h-full place-content-evenly text-unmuted_color">
        <a
          href="#hero_page"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('hero_page', e)
          }}
          className="nav_items flex gap-2 items-center nav_clicked_class"
        >
          <FaHome size={18} />
          HOME
        </a>
        <a
          href="#exp_page"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('exp_page', e)
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
            scrollToSection('project_page', e)
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
            scrollToSection('skill_page', e)
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
            scrollToSection('edu_page', e)
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
            scrollToSection('footer_page', e)
          }}
          className="nav_items flex gap-2 items-center"
        >
          <IoMdMan size={18} />
          About
        </a>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Sidebar
