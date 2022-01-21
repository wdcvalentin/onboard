import SideBar from '../components/layout/sidebar'

export default function Dashboard() {
  return (
    <div className={"dashboard--section"}>
      <SideBar/>
      <div className='dashboard--container'>
        <div className={"dashboard--heading"}>
          <h2>Dashboard</h2>
        </div>
        <div className={"dashboard--wrapper"}>

        </div>
      </div>
    </div>
  )
}


