import React from 'react'
import "../styles/eventSection.css"

const EventSection = () => {
  return (
    <div className="events">
        <div className="c-event event-1" >
            <h1>Cosmic Trivia</h1>
        </div>
        <div className="c-event event-2" >
            <h1>Guest Lecture</h1>
        </div>
        <div className="c-event event-3" >
            <h1>Magazine Unveiling</h1>
        </div>
    </div>
  )
}

export default EventSection