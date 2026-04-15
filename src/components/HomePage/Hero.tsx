import { FileDown, Github, Instagram, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <div
      id="hero_page"
      className=" overflow-auto   sm:py-8 flex flex-col-reverse items-start justify-center sm:items-center sm:flex-row   gap-4 place-items-center"
    >
      <div className=" pr-4 flex-2">
        <div className="grid gap-4">
          <div className="font-bold text-[clamp(2.4rem,4vw+0.3rem,5rem)] leading-tight">
            Hello, I'm Bhaskar
            <span className="inline-block animate-bounce">!</span>
          </div>
          <div className="text-xl text-muted-foreground">
            22 years old Web Developer from Nepal 🇳🇵
          </div>
        </div>

        <div className="my-8 text-xl ">
          Frontend by profession, full-stack by passion. I have built and
          deployed a number of projects.
        </div>

        <div className=" text-xl ">Lets Connect here,</div>
        <div className="mt-4  flex gap-4 items-center">
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

      <div className=" flex-1  flex ">
        <div className="bg-[url('/my-img/bhaskar1.jpg')] h-80 bg-center bg-no-repeat bg-cover w-60 rounded-md "></div>
        {/* <div className="bg-[url('/my-img/bhaskar2.jpg')] absolute h-80 bg-center bg-no-repeat bg-cover w-60 rounded-md skew-3"></div> */}
      </div>
    </div>
  )
}

export default Hero
