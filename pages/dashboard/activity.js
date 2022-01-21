import SideBar from '../../components/layout/sidebar'

export default function Activity() {
    return (
      <div className={"dashboard--section"}>
        <SideBar/>
        <div className={'dashboard--container'}>
          <div className={"dashboard--heading"}>
            <h2>Activity</h2>
          </div>
          <div className={"activity--wrapper"}>

          </div>
        </div>
      </div>
    )
}

