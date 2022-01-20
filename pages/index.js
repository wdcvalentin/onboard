import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'


export async function getStaticProps() {
  return {
    props: {
      title: 'Onboard your company like never before!',
      description: 'Onboard allow companies to create unique links between employee by proposing a simple but powerful interface. You\'ll be able to add team member, create events and share moments with your team.'
    },
  }
}

function Home(props) {
  const { title, description } = props

  return (
    <div className="wrapper">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
      </Head>

      <Navbar />
      <main className="main">
        <div className="main--container">
          <h1 className={"main--heading"}>{title}</h1>
          <p className={"main--subheading"}>{description}</p>
          <div className={"main--cta"}>
            <Link href={""}>
              <a>Get Started</a>
            </Link>
          </div>
        </div>
      <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}

export default Home
