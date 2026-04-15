import type { educationDataType } from './data/education'
import { educationData } from './data/education'

const Education = () => {
  return (
    <div id="edu_page" className="mt-16 ">
      <div className="text-[clamp(2.4rem,3vw+0.3rem,5rem)] font-bold ">
        EDUCATION{' '}
        <span className="text-2xl font-normal text-muted_color">
          Graduate [in may 2026]
        </span>
      </div>

      <div className="  relative  grid gap-4">
        <div className="h-full absolute border border-muted_color top-0 left-10 sm:left-11"></div>

        {educationData.map((e: educationDataType, index1: number) => {
          const hasActivites = e.activities?.length

          return (
            <div className="flex  items-start gap-4 sm:gap-8 p-4" key={index1}>
              <div
                className={`${e.orgName === 'Bhaktapur Multiple Campus' && ' h-16 w-16'} rounded-full   z-10`}
              >
                <img
                  className="rounded-full "
                  loading="lazy"
                  alt={e.orgName}
                  src={e.orgLogo}
                  height={58}
                  width={58}
                />
              </div>

              <div className="grid gap-6 w-full ">
                <div className="sm:flex sm:justify-between sm:gap-6  ">
                  <div>
                    <div className="font-bold text-xl leading-tight">
                      {e.orgName}
                    </div>
                    <div className="font-bold text-muted_color">
                      {e.faculty}
                    </div>
                  </div>
                  <div>
                    <div className="text-muted_color text-right">{`${e.startMonth ?? ''} ${e.startYear ?? ''} ${e.startMonth || e.startYear ? '-' : ''} ${e.endMonth ?? ''} ${e.endYear ?? ''}`}</div>
                    <div className="font-bold text-muted_color text-right">
                      {e.marks}
                    </div>
                  </div>
                </div>

                {hasActivites && (
                  <ul className="list-disc list-inside">
                    {e.activities!.map((ele: string, index2: number) => (
                      <li className="mb-4 " key={`${index1}${index2}`}>
                        {ele}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Education
