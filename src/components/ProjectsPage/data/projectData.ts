export type projectDataType = {
  projectName: string
  projectImg: string
  projectDesc: string
  techUsed: string[]
  liveLink: string
  codeLink: string
}

export const projectData: projectDataType[] = [
  {
    projectName: 'GuideBuddy',
    projectDesc:
      'A ride-sharing like role-based tourism marketplace enabling secure workflows for travelers and local guides',
    techUsed: ['NEXT.JS', 'TYPESCRIPT', 'LEAFLET', 'MONGODB', 'TAILWIND CSS'],
    liveLink: 'https://guide-buddy.vercel.app/',
    codeLink: 'https://github.com/ohhthatguy/guide-buddy',
    projectImg: '/project-img/guide-buddy.png',
  },
  {
    projectName: 'RoomKhoji',
    projectDesc:
      'a full-stack room rental platform connecting tenants and landlords with role-based access',
    techUsed: [
      'EXPRESS.JS',
      'REACT.JS',
      'LEAFLET',
      'MONGODB',
      'REACTSTRAP',
      'ESEWA',
      'NODE.JS',
      'MATERIAL UI',
    ],
    liveLink: 'https://roomkhoji.vercel.app/',
    codeLink: 'https://github.com/ohhthatguy/Room-khoji',
    projectImg: '/project-img/room-khoji.png',
  },
  {
    projectName: 'timeline-creator',
    projectDesc:
      'An interactive, one-click code copy, timeline templates for project visualization',
    techUsed: ['REACT.JS', 'TYPESCRIPT', 'TANSTACK ROUTER', 'TAILWIND CSS'],
    liveLink: 'https://timeline-creator-three.vercel.app/',
    codeLink: 'https://github.com/ohhthatguy/timeline-creator',
    projectImg: '/project-img/timeline-creator.png',
  },
]
