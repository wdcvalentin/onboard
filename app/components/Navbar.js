import Link from 'next/link'

export default function Navbar() {
  return <header className={"header"}>
    <div className={'header--wrapper'}>
      <div className={'navbar--branding'}>
        <Link href="/">
          <a>Onboard.™</a>
        </Link>
      </div>
      <div className={'navbar--primary'}>
        <nav>
          <ul>
            <li>
              <Link href={""}>
                <a className={'navbar--item'}>Features</a>
              </Link>
            </li>
            <li>
              <Link href={""}>
                <a className={'navbar--item'}>Pricing</a>
              </Link>
            </li>
            <li>
              <Link href={""}>
                <a className={'navbar--item'}>Resources</a>
              </Link>
            </li>
            <li>
              <Link href={""}>
                <a className={'navbar--item'}>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={'navbar--secondary'}>
        <ul>
          <li>
            {localStorage.getItem('tokenn') ? <Link href={"/dashboard"}>
              <a className={'navbar--item'}>Dashboard</a>
            </Link> :
              <Link href={"/login"}>
                <a className={'navbar--item'}>Log In</a>
              </Link>
            }

          </li>
          <li>
            <Link href={"/"}>
              <a className={'navbar--button'}>Get Started</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
}