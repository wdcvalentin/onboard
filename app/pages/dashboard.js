import { useContext } from 'react';
import { Context } from '../Context/context';
import SideBar from '../components/layout/sidebar'

export default function Dashboard() {
  const userContext = useContext(Context);
  const { userState } = userContext;

  return (
    <div className={"dashboard--section"}>
      <SideBar/>
      <div className='dashboard--container'>
        <div className={"dashboard--heading"}>
          <h2>Dashboard</h2>
        </div>
        <div className={"dashboard--wrapper"}>
          <h3>Hello {userState && userState.firstName}</h3>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      protected: true
    }, // Will be passed to the page component as props
  }
}