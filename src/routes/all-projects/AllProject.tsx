import type { projectDataType } from '#/components/ProjectsPage/data/projectData'
import { projectData } from '#/components/ProjectsPage/data/projectData'
import { createFileRoute } from '@tanstack/react-router'
import { GitBranch, Globe, Link } from 'lucide-react'

export const Route = createFileRoute('/all-projects/AllProject')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className=" md:flex-2 w-full p-4 lg:px-16 h-[calc(100vh-4rem)] bg-primary_color text-unmuted_color scrollbar-custom overflow-auto">
      <div className="text-[clamp(2.4rem,3vw+0.3rem,5rem)] font-bold ">
        PROJECTS{' '}
        <span className="text-2xl text-muted_color font-normal">
          ({projectData.length})
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {projectData.map((e: projectDataType, index: number) => {
          if (index + 1 > 4) return null

          return (
            <div
              className="border rounded-md px-4  py-4 bg-comp_bg"
              key={index}
            >
              {/* <div className="border border-muted_color rounded-md h-56 sm:h-86">
                <img
                  loading="lazy"
                  alt={e.projectName}
                  src={e.projectImg}
                  className="object-cover object-left rounded-md h-full w-full"
                />
              </div> */}

              <div className="group relative border overflow-hidden border-muted_color rounded-md h-56 sm:h-86 cursor-pointer">
                <img
                  loading="lazy"
                  alt={e.projectName}
                  src={e.projectImg}
                  className="object-cover object-left h-full w-full transition-all duration-1000 
               group-hover:scale-105 group-hover:blur-sm"
                />

                <div
                  className="absolute inset-0 flex items-center justify-center 
                  bg-black/40 opacity-0 transition-opacity duration-500 
                  group-hover:opacity-100"
                >
                  <a
                    href={e.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="translate-y-4 transform rounded-full bg-white px-6 py-2 
                 font-bold text-black transition-transform duration-500 
                 group-hover:translate-y-0 hover:bg-gray-200 flex gap-2 items-center"
                  >
                    <Link size={18} /> Live Link
                  </a>
                </div>
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
