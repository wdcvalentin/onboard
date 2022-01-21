import { Modal } from '@mui/material';
import { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { getUsersFromCompany } from '../../api/user.api';
import SideBar from '../../components/layout/sidebar';
import { CardUser } from '../../components/teams/CardUser';
import { FormAddUser } from '../../components/teams/FormAddUser';

export default function Teams() {
  const [users, setUsers] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = () => setOpen(false);

  useEffect(async () => {
    await fetchMembers();
  }, [])

  const fetchMembers = async () => {
    const authToken = localStorage.getItem('token');
    const { data } = await getUsersFromCompany(authToken);
    return setUsers(data);
  }

  return (
    <div className={"team--section"}>
      <SideBar />
      <div className={'team--container'}>
        <div className={"team--heading"}>
          <h2>Team</h2>
          <button onClick={handleOpen} className={"team--cta"}>
            Add team member <FiPlus />
          </button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <FormAddUser fetchMembers={fetchMembers} onSubmit={handleSubmit} />
          </Modal>

        </div>
        <div className={"team--wrapper"}>
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

