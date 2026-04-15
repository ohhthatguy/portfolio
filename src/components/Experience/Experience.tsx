import type { experienceDataType } from './data/experienceData'
import { experienceData } from './data/experienceData'

const Experience = () => {
  return (
    <div id="exp_page" className="mt-16 sm:mt-10 ">
      <div className="text-[clamp(2.4rem,4vw+0.3rem,5rem)] font-bold ">
        EXPERIENCE{' '}
        <span className="text-2xl text-muted_color font-normal">
          ({experienceData.length})
        </span>
      </div>

      <div className="  relative  grid gap-4">
        <div className="h-full absolute border border-muted_color top-0 left-10 sm:left-11"></div>

        {experienceData.map((e: experienceDataType, index1: number) => (
          <div className="flex  items-start gap-4 sm:gap-8 p-4" key={index1}>
            <div className=" rounded-full border  z-10">
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
                  <div className="font-bold text-muted_color">{e.position}</div>
                </div>
                <div className="text-muted_color">{`${e.startMonth} ${e.startYear} - ${e.endMonth} ${e.endYear}`}</div>
              </div>

              <ul className="list-disc list-inside">
                {e.activities.map((ele: string, index2: number) => (
                  <li className="mb-4 " key={`${index1}${index2}`}>
                    {ele}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
