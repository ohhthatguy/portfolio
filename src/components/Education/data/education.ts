export type educationDataType = {
  orgLogo: string
  orgName: string
  faculty: string
  marks: string
  startYear?: number
  startMonth?: string
  endYear?: number
  endMonth?: string
  activities?: string[]
}

export const educationData: educationDataType[] = [
  {
    orgLogo: '/edu-logo/bmc-logo.png',
    orgName: 'Bhaktapur Multiple Campus',
    faculty:
      'Bachelor of Science in Computer Science and Information Technology(BSc. CSIT)',
    startYear: 2022,
    startMonth: 'May',
    endYear: 2026,
    endMonth: 'May',
    marks: '80.98% (till 7th Sem)',
  },

  {
    orgLogo: '/edu-logo/Premier-Secondary-School.jpg',
    orgName: 'Premier Secondary School',
    faculty: 'Higher Secondary Education (+2), Science (Physics)',
    startYear: 2019,

    endYear: 2021,

    marks: '3.71 GPA',
  },

  {
    orgLogo: '/edu-logo/KMSS-logo-1.png',
    orgName: 'Khadga Memorial English Boarding School',
    faculty: 'Secondary Education (SEE)',

    endYear: 2019,

    marks: '3.4 GPA',
  },
]
