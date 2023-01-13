import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  console.log(timelineItemsList)
  const renderTimelineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }

  const titleData = timelineItemsList.map(eachItem => eachItem.title)
  console.log(titleData)
  return (
    <div className="timeline-container">
      <div className="responsive-container">
        <h1 className="heading">
          MY JOURNEY OF <br />
          <span className="ccbp-heading">CCBP 4.0</span>{' '}
        </h1>

        <div>
          <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
            {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
          </Chrono>
        </div>
      </div>
    </div>
  )
}
export default TimelineView
