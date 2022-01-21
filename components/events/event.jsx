import Image from 'next/image'
import { FiUsers, FiMapPin, FiClock, FiFileText } from 'react-icons/fi'

export const Event = () => {
  return (
    <div className={"event--card"}>
      <div className={"event--card-wrapper"}>
        <div className={"event--info"}>
          <h3 className={"event--title"}>Italian Restaurant</h3>
          <p className={"event--place"}><FiMapPin />La Table des Artistes Courbevoie 92</p>
          <p className={"event--time"}><FiClock />de <strong>12:30pm</strong> à <strong>2pm</strong></p>
          <p className={"event--description"}><FiFileText />The IT, Management and Commercial Development team joined this space</p>
          <p className={"event--participant"}><FiUsers /> See all participants </p>
          <button className={"event--cta"}>Join</button>
        </div>
      </div>
    </div>
  )
}
