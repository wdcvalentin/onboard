import { signOut } from 'next-auth/react';
import Link from "next/link";


export default function SideBar() {

  function logout() {
    logoutUser()
  }
  return (
    <div className={"sidebar--section"}>
      <div className={"sidebar--container"}>
        <div className={"sidebar--navigation"}>
          <div className={"sidebar--heading"}>
            <h2>Onboard.™</h2>
          </div>
          <ul>
            <li>
              <Link href="/dashboard">
                <a className={"sidebar--item"}>Dashboard</a>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/activity">
                <a className={"sidebar--item"}>Activity</a>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/events">
                <a className={"sidebar--item"}>Events</a>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/team">
                <a className={"sidebar--item"}>Team</a>
              </Link>
            </li>
            {/* <li>
              <Link href="/dashboard/planning">
                <a className={"sidebar--item"}>Planning</a>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/account">
                <a className={"sidebar--item"}>Account</a>
              </Link>
            </li> */}
          </ul>
        </div>
        <div className={"sidebar--navigation-secondary"}>
          <ul>
            {/* <li>
              <Link href="/dashboard/settings">
                <a className={"sidebar--item"}>Settings</a>
              </Link>
            </li> */}
            <li>
              <Link href="/">
                <a onClick={() => signOut({ callbackUrl: '/' })} className={"sidebar--item item--destructive"}>Logout</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}