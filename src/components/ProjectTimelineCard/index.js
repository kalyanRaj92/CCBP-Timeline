import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    id,
    description,
    duration,
    imageUrl,
    projectTitle,
    projectUrl,
  } = projectDetails
  return (
    <div className="project-card">
      <img src={imageUrl} alt="project" className="project-card-image" />
      <div className="header-section">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration-section">
          <AiFillCalendar />
          <p className="project-duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a href={projectUrl} className="project-link">
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
