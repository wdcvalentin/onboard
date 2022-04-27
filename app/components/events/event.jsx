import Image from 'next/image'
import { FiClock, FiMapPin, FiUsers } from 'react-icons/fi'
import { formatDateHM } from '../../utils/dateFormat'

export const Event = ({ name, description, date, participants }) => {
  return (
    <div className={"card"}>
      <div className={"card--container"}>
        <div className={"card--content"}>
          <div className={"card--heading"}>
            <h3>{name}</h3>
            <p><FiMapPin /> {description}</p>
          </div>
          <div className={"card--info"}>
            <p><FiClock /> {formatDateHM(date)} </p>
            {participants.length > 0 && <p><FiUsers /> {participants.length} joined </p>}
          </div>
          <div className={"card--cta"}>
            <button className={"event--cta"}>Join</button>
          </div>
        </div>
        <div className={"card--image"}>
          <Image
            src={"/static/images/italian-restaurant.jpg"}
            alt={""}
            width={"100%"}
            height={"100%"}
            layout={"responsive"}
          />
        </div>
      </div>
    </div>
  )
}