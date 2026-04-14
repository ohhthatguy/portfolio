import { GitBranch, Globe } from 'lucide-react'
import type { projectDataType } from './data/projectData'
import { projectData } from './data/projectData'

const Projects = () => {
  return (
    <div className="mt-16">
      <div className="text-[clamp(2.4rem,4vw+0.3rem,5rem)] font-bold ">
        PROJECTS
      </div>

      <div className="grid gap-4">
        {projectData.map((e: projectDataType, index: number) => (
          <div className="border rounded-md px-8 py-4 " key={index}>
            <div className="border border-muted_color rounded-md  ">
              <img
                loading="lazy"
                alt={e.projectName}
                src={e.projectImg}
                className="object-cover object-center rounded-md h-full w-full"
              />
            </div>

            <div className="grid gap-6 mt-2">
              <div className="grid gap-2">
                <div className="text-2xl font-bold">{e.projectName}</div>
                <div className="leading-tight text-sm">{e.projectDesc}</div>
              </div>

              <div className="flex gap-2 flex-wrap">
                {e.techUsed.map((ele: string, index2: number) => (
                  <div
                    className="font-bold rounded-md text-xs p-0.5 text-white bg-secondary_color "
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
                  className="secondary_btn flex gap-2 items-center"
                >
                  <Globe size={19} /> Live
                </a>

                <a
                  href={e.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary_btn flex gap-2 items-center"
                >
                  <GitBranch size={19} /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
