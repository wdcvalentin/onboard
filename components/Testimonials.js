import Image from 'next/image'
import Link from 'next/link'

function Testimonials() {

  return (
    <div className={"testimonials--section"}>
      <div className={"testimonials--container"}>
        <div className={"testimonials--heading text--center"}>
          <h3>Testimonials</h3>
          <h2>What people think about us?</h2>
          <p>They trust us, check what our users think about us and our solution at this problem.</p>
        </div>
        <div className={"testimonials--content"}>
          <div className={"testimonials--card"}>
            <div className={"testimonials--card-message"}>
              <p>&quot;I&apos;ve always fear the first weeks when starting a new journey in a new company but with Onboard everything went smooth and cool, I loved it!&quot;</p>
            </div>
            <div className={"testimonials--card-info"}>
              <div className={"testimonials--image"}>
                <Image
                  src="/static/images/alexander-hipp-iEEBWgY_6lA-unsplash.jpg"
                  alt="alexander-hipp"
                  width={64}
                  height={64}
                />
              </div>
              <div className={"testimonials--user"}>
                <p className={"name"}>Alexander Hipp</p>
                <p className={"job"}>Software Engineer at Vercel</p>
              </div>
            </div>
          </div>
          <div className={"testimonials--card"}>
            <div className={"testimonials--card-message"}>
              <p>&quot;I&apos;ve always fear the first weeks when starting a new journey in a new company but with Onboard everything went smooth and cool, I loved it!&quot;</p>
            </div>
            <div className={"testimonials--card-info"}>
              <div className={"testimonials--image"}>
                <Image
                  src="/static/images/dahiana-waszaj-XQWfro4LrVs-unsplash.jpg"
                  alt="dahiana-waszaj"
                  width={64}
                  height={64}
                />
              </div>
              <div className={"testimonials--user"}>
                <p className={"name"}>Dahiana Waszaj</p>
                <p className={"job"}>Chef at Ceasar Palace</p>
              </div>
            </div>
          </div>
          <div className={"testimonials--card"}>
            <div className={"testimonials--card-message"}>
              <p>&quot;I&apos;ve always fear the first weeks when starting a new journey in a new company but with Onboard everything went smooth and cool, I loved it!&quot;</p>
            </div>
            <div className={"testimonials--card-info"}>
              <div className={"testimonials--image"}>
                <Image
                  src="/static/images/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg"
                  alt="joseph-gonzalez"
                  width={64}
                  height={64}
                />
              </div>
              <div className={"testimonials--user"}>
                <p className={"name"}>Joseph Gonzalez</p>
                <p className={"job"}>Photographer at The New York Times</p>
              </div>
            </div>
          </div>
          <div className={"testimonials--card"}>
            <div className={"testimonials--card-message"}>
              <p>&quot;I&apos;ve always fear the first weeks when starting a new journey in a new company but with Onboard everything went smooth and cool, I loved it!&quot;</p>
            </div>
            <div className={"testimonials--card-info"}>
              <div className={"testimonials--image"}>
                <Image
                  src="/static/images/julian-wan-WNoLnJo7tS8-unsplash.jpg"
                  alt="julian-wan"
                  width={64}
                  height={64}
                />
              </div>
              <div className={"testimonials--user"}>
                <p className={"name"}>Julian Wan</p>
                <p className={"job"}>Network Engineer at Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials