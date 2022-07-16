import { getSession } from 'next-auth/react';
import SideBar from '../components/layout/sidebar'

export default function Dashboard({ sessionAuth, user }) {
  return (
    <div className={"dashboard--section"}>
      <SideBar />
      <div className='dashboard--container'>
        <div className={"dashboard--heading"}>
          <h2>Dashboard</h2>
        </div>
        <div className={"dashboard--wrapper"}>
          <h3>Hello {user.firstName} </h3>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session) {
    return {
      props: {
        session: null
      }
    }
  }

  const URL = process.env.NEXT_PUBLIC_NODE_ENV !== 'development' ? process.env.NEXT_PUBLIC_HOST_API_URL : process.env.NEXTAUTH_URL;
  const response = await fetch(`${URL}/api/user/${session.id}`)
  const user = await response.json();

  return {
    props: {
      sessionAuth: session,
      user,
      protected: true,
    }, // Will be passed to the page component as props
  }
}