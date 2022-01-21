import Image from 'next/image'
import { FiUsers, FiMapPin, FiClock, FiFileText } from 'react-icons/fi'

export const Event = () => {
  return (
    <div className={"card"}>
      <div className={"card--container"}>
        <div className={"card--content"}>
          <div className={"card--heading"}>
            <h3>Italian Restaurant</h3>
            <p><FiMapPin /> La Table des Artistes Courbevoie 92</p>
          </div>
          <div className={"card--info"}>
            <p><FiClock /> de <strong>12:30pm</strong> à <strong>2pm</strong></p>
            <p><FiFileText /> The IT, Management and Commercial Development team joined this space</p>
            <p><FiUsers /> See all participants </p>
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
