import { useEffect, useState, useContext } from 'react';
import { Context } from '../../Context/context';
import { Modal } from '@mui/material';
import { FiPlus } from 'react-icons/fi';
import { getUsersFromCompany } from '../../api/user.api';
import SideBar from '../../components/layout/sidebar';
import { CardUser } from '../../components/teams/CardUser';
import { FormAddUser } from '../../components/teams/FormAddUser';

export default function Teams() {
  const userContext = useContext(Context);
  const { userState } = userContext;
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = () => setOpen(false);

  useEffect(async () => {
    (userState && userState.company) && await fetchMembers();
  }, [userState])

  const fetchMembers = async () => {
    const authToken = localStorage.getItem('token');
    const { data } = await getUsersFromCompany(authToken);
    setIsLoading(false);
    return setUsers(data);
  }

  return (
    <div className={"dashboard--section"}>
      <SideBar />
      <div className={'dashboard--container'}>
        <div className={"dashboard--heading"}>
          <h2>Team</h2>
          <button onClick={handleOpen} className={"dashboard--cta"}>
            Add team member <FiPlus />
          </button>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <FormAddUser fetchMembers={fetchMembers} onSubmit={handleSubmit} />
        </Modal>
        <div className={"team--wrapper"}>
          {isLoading && <div>Loading...</div>}
          {users && users.map((user) => (
            <CardUser
              key={user._id}
              firstName={user.firstName}
              lastName={user.lastName}
              email={user.email} />
          ))}
        </div>
      </div>
    </div>
  )
}
