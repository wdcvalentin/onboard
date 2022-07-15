import Image from 'next/image'

export const CardUser = ({ firstName, lastName }) => {
  return (
    <div className={"team--card"}>
      <div className={"team--image"}>
        <Image
          src="/static/images/man_user.png"
          alt="joseph-gonzalez"
          width={"100%"}
          height={"100%"}
          layout={"responsive"}
          priority
        />
      </div>
      <div className={"team--info"}>
        <p>{firstName} {lastName}</p>
      </div>
    </div>
  )
}