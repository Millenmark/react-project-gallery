import React from 'react'

const ProjectWrapper = ({children, className}) => {
  return (
    <div className={className}>{children}</div>
  )
}

export default ProjectWrapper