import SideBar from '../../components/layout/sidebar'
import Image from 'next/image'
import { FiPlus } from 'react-icons/fi'

export default function Teams() {
    return (
        <div className={"dashboard--section"}>
            <SideBar/>
            <div className={'dashboard--container'}>
              <div className={"dashboard--heading"}>
                <h2>Team</h2>
                <button className={"dashboard--cta"}>
                  Add team member <FiPlus />
                </button>
              </div>
              <div className={"team--wrapper"}>
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
              </div>
            </div>
        </div>
    )
}

