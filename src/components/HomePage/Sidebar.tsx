const Sidebar = () => {
  return (
    <div className="md:flex-1 hidden md:block bg-secondary_color  max-w-40 relative">
      {/* <div className=" absolute right-0 top-0 w-40  h-screen"> */}
      <div className="grid  h-full place-content-evenly">
        <div className="nav_items ">HOME</div>
        <div className="nav_items ">PROJECTS</div>
        <div className="nav_items">EXPERIENCE</div>
        <div className="nav_items">SKILLS</div>

        <div className="nav_items">EDUCATION</div>
        <div className="nav_items">CONTACT</div>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Sidebar
