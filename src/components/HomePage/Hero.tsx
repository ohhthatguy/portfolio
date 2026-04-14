import { FileDown, Github, Instagram, Linkedin, Mail } from 'lucide-react'
import Experience from '../Experience/Experience'

const Hero = () => {
  return (
    <div className=" md:flex-2 p-4 mt-16 h-[calc(100vh-4rem)] bg-primary_color text-unmuted_color scrollbar-custom overflow-auto">
      <div className=" overflow-auto   flex flex-col-reverse items-start justify-center sm:items-center sm:flex-row   gap-4 place-items-center">
        <div className="">
          <div className="grid gap-4">
            <div className="font-bold text-[clamp(2.4rem,4vw+0.3rem,5rem)] leading-tight">
              Hello, I'm Bhaskar!
            </div>
            <div className="text-[clamp(1.4rem,2vw+0.3rem,5rem)]">
              22 years old Web Developer from Nepal 🇳🇵
            </div>
          </div>

          <div className="my-8 text-[clamp(1.4rem,2vw+0.3rem,5rem)]">
            Frontend by profession, full-stack by passion. I have built and
            deployed a number of projects.
          </div>

          <div className=" text-[clamp(1.4rem,2vw+0.3rem,5rem)]">
            Lets Connect here,
          </div>
          <div className="flex gap-4 items-center">
            <a
              href="/BHASKAR_THAKULLA_RESUME.pdf"
              download="BHASKAR_THAKULLA_RESUME.pdf"
              className="secondary_btn flex gap-2 items-center"
            >
              Resume <FileDown size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/bhaskar-thakulla-baaab8279/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin
                className="hover:cursor-pointer hover:scale-110 scale-100 transition-all duration-300"
                size={19}
              />{' '}
            </a>

            <a
              href="https://github.com/ohhthatguy"
              target="_blank"
              rel="noreferrer"
            >
              <Github
                className="hover:cursor-pointer hover:scale-110 scale-100 transition-all duration-300"
                size={19}
              />
            </a>
            <a
              href="mailto:thakullabhaskar456@gmail.com?subject=Connection from portfolio "
              target="_blank"
              rel="noreferrer"
            >
              <Mail
                className="hover:cursor-pointer hover:scale-110 scale-100 transition-all duration-300"
                size={19}
              />
            </a>
            <a
              href="https://www.instagram.com/oyebhaskarr/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram
                className="hover:cursor-pointer hover:scale-110 scale-100 transition-all duration-300"
                size={19}
              />
            </a>
          </div>
        </div>

        <div className=" ">
          <div className="bg-[url('/bhaskar1.jpg')] h-80 bg-center bg-no-repeat bg-cover w-60 rounded-md"></div>
        </div>
      </div>

      <Experience />
    </div>
  )
}

export default Hero
