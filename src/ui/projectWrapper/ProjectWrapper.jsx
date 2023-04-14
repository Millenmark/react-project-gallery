import React from 'react'
import { projects } from './ProjectWrapper.module.css'

const ProjectWrapper = ({children, className}) => {
  return (
    <div className={`${projects} ${className}`}>{children}</div>
  )
}

export default ProjectWrapper