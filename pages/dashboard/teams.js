import SideBar from '../../components/layout/sidebar'
import { FormAddUser } from '../../components/teams/FormAddUser'

export default function Teams() {
    return (
        <div className={"team--section"}>
            <SideBar/>
            <div className='team--container'>
                    <h2>Teams</h2>



                    <FormAddUser ></FormAddUser>
            </div>
        </div>
    )
}

