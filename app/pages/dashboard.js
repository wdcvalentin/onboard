import { getSession } from 'next-auth/react';
import Link from "next/link";
import SideBar from '../components/layout/sidebar';
import { formatDateHM } from '../utils/dateFormat';

export default function Dashboard({ sessionAuth, user, userEvent }) {
  return (
    <div className={"dashboard--section"}>
      <SideBar />
      <div className='dashboard--container'>
        <div className={"dashboard--heading"}>
          <h2>Dashboard</h2>
        </div>
        <div className={"dashboard--wrapper"}>
          <Link href="/dashboard/events">
            <div className='card--container-dashboard'>
              <h3>Your next Events Incoming</h3>

              {userEvent.map((event) => {
                return (
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <button onClick={() => window.location = '/dashboard/events'}>
                      {event.name}
                    </button>
                    <div style={{ color: 'gray' }}>{formatDateHM(event.eventDate)}</div>
                  </div>
                )
              })}
            </div>
          </Link>
          <Link href="/dashboard/activity">
            <div className='card--container-dashboard'>
              <h3>Activity Joined</h3>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ color: 'gray' }}>No activity joined</div>
              </div>
            </div>
          </Link>
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

  const URL = process.env.NEXTAUTH_URL;
  const [responseUser, responseUserEvent] = await Promise.all([
    fetch(`${URL}/api/user/${session.id}`),
    fetch(`${URL}/api/event/user-event?userId=${session.id}`)
  ])
  const [user, userEvent] = await Promise.all([
    await responseUser.json(),
    await responseUserEvent.json()
  ])

  return {
    props: {
      sessionAuth: session,
      user,
      userEvent: userEvent.events,
      protected: true,
    }, // Will be passed to the page component as props
  }
}