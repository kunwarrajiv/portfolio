import { PROJECTS } from "../constants"

const Project = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        Projects
      </h1>
      <div>
        {PROJECTS.map((projectData, index) => (
            <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
                <div className="w-full lg:w-1/4">
                    <img 
                    src={projectData.image} 
                    alt={projectData.title} 
                    width={150}
                    height={150}
                    className="mb-6 rounded"
                    />
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">
                        {projectData.title}
                    </h6>
                    <p className="mb-4 text-neutral-400">
                        {projectData.description}
                    </p>
                    {projectData.technologies.map((tech, index) => (
                        <span className="mr-2 rounded bg-neutral-900
                        px-2 py-1 text-sm font-medium text-purple-900" key={index}> 
                            {tech}

                        </span>
                    ))}
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Project
