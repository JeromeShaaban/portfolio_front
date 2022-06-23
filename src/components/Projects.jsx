import React, { useState, useEffect } from "react"
import axios from "axios"
import ProjectCard from "./ProjectCard"
import "../styles/projects.scss"

const Projects = () => {
  const [projects, setProjects] = useState([])

  /* const getProjects = async () => {
    try {
      const ProjectsData = await axios.get("http://localhost:8000/api/projects")
      setProjects(ProjectsData.data)
    } catch (err) {
      console.log(err)
    } finally {
      setLoadingProjects(false)
    }
  } */

  const getProjects = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/projects`)
      .then((project) => {
        setProjects(project.data)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getProjects()
  }, [])

  return (
    <div className="deck">
      {projects.length &&
        projects
          .sort((a, b) => b.id - a.id)
          .map((project, index) => <ProjectCard key={index} {...project} />)}
    </div>
  )
}

export default Projects
