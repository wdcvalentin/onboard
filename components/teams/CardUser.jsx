import Image from 'next/image'

export const CardUser = () => {
    return (
        <div className={"team--card"}>
                  <div className={"team--image"}>
                    <Image
                      src="/static/images/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg"
                      alt="joseph-gonzalez"
                      width={"100%"}
                      height={"100%"}
                      layout={"responsive"}
                      />
                  </div>
                  <div className={"team--info"}>
                  <p>Joseph Gonzalez</p>
                  </div>
                </div>
    )
}