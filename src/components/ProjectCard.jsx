import React from "react"
import "../styles/projectCard.scss"

const ProjectCard = ({
  projectImage,
  projectName,
  description,
  urlSite,
  urlRepo,
}) => {
  return (
    <div className="projectContainer">
      <img src={`${projectImage}`} alt={projectName} className="projectImage" />
      <h3 className="projectName">{projectName}</h3>
      <p className="description">{description}</p>
      <a href={urlSite} target="_blank" rel="noreferrer">
        Site
      </a>
      <a href={urlRepo} target="_blank" rel="noreferrer">
        Repo GitHub
      </a>
    </div>
  )
}

export default ProjectCard
