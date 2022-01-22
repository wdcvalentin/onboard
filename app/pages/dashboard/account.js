import SideBar from '../../components/layout/sidebar'

export default function Account() {
    return (
      <div className={"dashboard--section"}>
        <SideBar/>
        <div className={'dashboard--container'}>
          <div className={"dashboard--heading"}>
            <h2>Account</h2>
          </div>
          <div className={"account--wrapper"}>

          </div>
        </div>
      </div>
    )
}

