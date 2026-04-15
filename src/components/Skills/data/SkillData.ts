import { BsTypescript } from 'react-icons/bs'
import { FaCss3, FaHtml5, FaNode, FaReact } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import {
  SiExpress,
  SiLeaflet,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiSocketdotio,
} from 'react-icons/si'

export type skillDataType = {
  skillIcon: React.ElementType
  skillName: string
}

export const skillData: skillDataType[] = [
  {
    skillIcon: FaHtml5,
    skillName: 'HTML',
  },
  {
    skillIcon: FaCss3,
    skillName: 'CSS',
  },
  {
    skillIcon: RiTailwindCssFill,
    skillName: 'Tailwind',
  },
  {
    skillIcon: BsTypescript,
    skillName: 'Typescript',
  },
  {
    skillIcon: SiMui,
    skillName: 'Material UI',
  },
  {
    skillIcon: FaReact,
    skillName: 'ReactJS',
  },
  {
    skillIcon: SiNextdotjs,
    skillName: 'NEXTJS',
  },
  {
    skillIcon: FaNode,
    skillName: 'NodeJS',
  },
  {
    skillIcon: SiExpress,
    skillName: 'ExpressJS',
  },
  {
    skillIcon: SiMongodb,
    skillName: 'MongoDB',
  },
  {
    skillIcon: SiSocketdotio,
    skillName: 'Socket.io',
  },
  {
    skillIcon: SiLeaflet,
    skillName: 'leaflet',
  },
]
