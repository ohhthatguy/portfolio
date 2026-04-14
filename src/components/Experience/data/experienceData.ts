export type experienceDataType = {
  orgLogo: string
  orgName: string
  position: string
  startYear: number
  startMonth: string
  endYear: number
  endMonth: string
  activities: string[]
}

export const experienceData: experienceDataType[] = [
  {
    orgLogo: '/work-logo/SEBS_logo.png',
    orgName: 'Search Eyes Business Solution (SEBS)',
    position: 'Frontend Developer (Intern)',
    startYear: 2025,
    startMonth: 'Nov',
    endYear: 2026,
    endMonth: 'Feb',
    activities: [
      'Worked on frontend development team and received a return offer for full-time position',
      'Built UI and frontend logic for Digital Daily, an internal system for Police Headquarters, Naxal',
      'Converted Figma wireframes into reusable and fully responsive UI components',
    ],
  },
]
