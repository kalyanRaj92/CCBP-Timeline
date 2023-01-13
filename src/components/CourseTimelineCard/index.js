import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {id, description, duration, courseTitle, tagsList} = courseDetails

  return (
    <div className="course-card">
      <div className="header-section">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-section">
          <AiFillClockCircle />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <div className="tag-container">
        {tagsList.map(eachTag => (
          <p className="tag-button">{eachTag.name}</p>
        ))}
      </div>
    </div>
  )
}
export default CourseTimelineCard
