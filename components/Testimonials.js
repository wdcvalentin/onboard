export async function getStaticProps() {
  return {
    props: {
      title: 'What people think about us?'
    }
  }
}

function Testimonials(props) {
  const { title } = props

  return (
    <div className={"testimonials--section"}>
      <div className={"testimonials--container"}>
        <div className={"testimonials--heading"}>
          <h2>{title}</h2>
        </div>
        <div className={"testimonials--content"}>

        </div>
      </div>
    </div>
  )
}

export default Testimonials