import { Github, Instagram, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <div
      id="footer_page"
      className="mt-16 border rounded-md shadow-2xl h-56 flex justify-center items-center flex-col gap-6 "
    >
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Don't be shy, <br className="xs:hidden" /> say a quick hi!{' '}
          <span className="inline-block  animate-ping">👋</span>
        </h2>
        <div className="text-sm text-muted_color italic mt-4 xs:mt-1 px-2">
          I'm everywhere! Catch me on whichever one you use most.
        </div>
      </div>
      <div className="  flex  w-full  gap-8 justify-around sm:justify-center items-center">
        {/* <div>
          <a
            href="/BHASKAR_THAKULLA_RESUME.pdf"
            download="BHASKAR_THAKULLA_RESUME.pdf"
            className="secondary_btn flex gap-2 items-center"
          >
            Resume <FileDown size={19} />
          </a>
        </div> */}

        <div className="flex gap-6">
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
    </div>
  )
}

export default Footer
