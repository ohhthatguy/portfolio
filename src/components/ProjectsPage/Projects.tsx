import { ArrowRight, GitBranch, Globe } from 'lucide-react'
import type { projectDataType } from './data/projectData'
import { projectData } from './data/projectData'

const Projects = () => {
  return (
    <div id="project_page" className="mt-16">
      <div className="flex justify-between items-center">
        <div className="text-[clamp(2.4rem,4vw+0.3rem,5rem)] font-bold ">
          PROJECTS{' '}
          <span className="text-2xl text-muted_color font-normal">
            ({projectData.length})
          </span>
        </div>

        <div className="flex gap-4 text-muted_color hover:text-unmuted_color hover:cursor-pointer transition-colors duration-500">
          more <ArrowRight />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {projectData.map((e: projectDataType, index: number) => {
          if (index + 1 > 4) return null

          return (
            <div
              className="border rounded-md px-4  py-4 bg-comp_bg"
              key={index}
            >
              <div className="border border-muted_color rounded-md h-56 sm:h-86">
                <img
                  loading="lazy"
                  alt={e.projectName}
                  src={e.projectImg}
                  className="object-cover object-left rounded-md h-full w-full"
                />
              </div>

              <div className="grid gap-6 mt-2">
                <div className="grid gap-2">
                  <div className="text-2xl font-bold">{e.projectName}</div>
                  <div className="leading-tight text-md text-muted_color">
                    {e.projectDesc}
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap">
                  {e.techUsed.map((ele: string, index2: number) => (
                    <div
                      className="font-bold rounded-md text-xs p-0.5 text-white border border-tertiary_color "
                      key={`${index}${index2}`}
                    >
                      {ele}
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={e.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-unmuted_color p-2 rounded-md transition-all duration-200 hover:scale-105 scale-100 flex gap-2 items-center hover:bg-unmuted_color hover:text-comp_bg"
                  >
                    <Globe size={19} /> Live
                  </a>

                  <a
                    href={e.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-unmuted_color p-2 rounded-md transition-all duration-200 hover:scale-105 scale-100 flex gap-2 items-center hover:bg-unmuted_color hover:text-comp_bg"
                  >
                    <GitBranch size={19} /> Code
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
