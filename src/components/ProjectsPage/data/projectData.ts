export type projectDataType = {
  projectName: string
  projectImg: string
  projectDesc: string
  techUsed: string[]
  liveLink: string
  codeLink: string
}

// the first 4 project should be the project which is shown in the homepage, without click "more"

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
    projectName: 'timeline-creator',
    projectDesc:
      'An interactive, one-click code copy, timeline templates for project visualization',
    techUsed: ['REACT.JS', 'TYPESCRIPT', 'TANSTACK ROUTER', 'TAILWIND CSS'],
    liveLink: 'https://timeline-creator-three.vercel.app/',
    codeLink: 'https://github.com/ohhthatguy/timeline-creator',
    projectImg: '/project-img/timeline-creator.png',
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
    projectName: 'TExpress',
    projectDesc:
      ' a web application made to help send password, text snippet or small-sized file from one device to another device using socket.io technology.',
    techUsed: [
      'EXPRESS.JS',
      'REACT.JS',
      'CLOUDINARY',
      'SOCKET.IO',
      'TYPESCRIPT',
      'ESEWA',
      'NODE.JS',
      'DAISY UI',
      'TAILWIND CSS',
    ],
    liveLink: 'https://txpress.vercel.app/',
    codeLink: 'https://github.com/ohhthatguy/txpress',
    projectImg: '/project-img/texpress.png',
  },
]
