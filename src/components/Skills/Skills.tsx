import type { skillDataType } from './data/SkillData'
import { skillData } from './data/SkillData'

const Skills = () => {
  return (
    <div id="skill_page" className="mt-16">
      <div className="text-[clamp(2.4rem,3vw+0.3rem,5rem)] font-bold ">
        SKILLS{' '}
        <span className="text-2xl font-normal text-muted_color">
          ({skillData.length})
        </span>
      </div>

      <div className="flex gap-4 flex-wrap">
        {skillData.map((e: skillDataType, index: number) => {
          const Icon = e.skillIcon
          return (
            <div
              className={`border border-secondary_color p-2 flex gap-2 items-center lg:min-w-36`}
              key={index}
            >
              <Icon size={19} /> {e.skillName}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
