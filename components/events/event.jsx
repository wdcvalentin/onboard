import Image from 'next/image'

export const Event = () => {
  return (
    <div className={"event--card"}>
      <div className={"event--card-wrapper"}>
        <div className={"event--info"}>
          <h3 className={"event--title"}>Italian Restaurant</h3>
          <p className={"event--place"}>La Table des Artistes Courbevoie 92</p>
          <p className={"event--time"}>de 12:30pm à 2pm</p>
          <p className={"event--description"}>The IT, Management and Commercial Development team joined this space</p>
          <p className={"event--participant"}>See all participants</p>
          <button>Join</button>
        </div>
        <div className={"event--image"}>
          <Image
            src={"/static/images/fallon-travels-q03ZLncun2Y-unsplash.jpg"}
            alt={"Italian Restaurant"}
            width={"100"}
            height={"100"}
            layout={"responsive"}
          />
        </div>
      </div>
    </div>
  )
}
