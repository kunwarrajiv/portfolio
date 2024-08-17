import Navbar from "./components/navbar";
import Intro from "./components/intro";
import About from "./components/About";
import Tech from "./components/tech";
import Experience from "./components/Experience";
import Project from "./components/project";
import Contact from "./components/Contact";

function App() {

  return (
    <>
    <div className="overflow-x-hidden text-neutral-300 antialiased 
    selection:bg-cyan-300 selection:text-cyan-900">

        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">

          </div>
        </div>

        <div className="container mx-auto px-8 ">
          <Navbar/>
          <Intro />
          <About />
          <Tech />
          <Experience />
          <Project />
          <Contact />

        </div>
    
    </div>
    </>
  )
}

export default App
