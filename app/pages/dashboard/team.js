import { getSession } from 'next-auth/react';
import { useState  } from 'react';
import { Modal } from '@mui/material';
import { FiPlus } from 'react-icons/fi';
import SideBar from '../../components/layout/sidebar';
import { CardUser } from '../../components/teams/CardUser';
import { FormAddUser } from '../../components/teams/FormAddUser';

export default function Teams({ teamMembers, userId }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = () => setOpen(false);

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
          <FormAddUser onSubmit={handleSubmit} userId={userId} />
        </Modal>
        <div className={"team--wrapper"}>
          {teamMembers && teamMembers.map((member) => (
            <CardUser
              key={member._id}
              firstName={member.firstName}
              lastName={member.lastName}
              email={member.email} />
          ))}
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

  const response = await fetch(`http://localhost:3000/api/user/company-members?id=${session.id}`)
  const teamMembers = await response.json();

  return {
    props: {
      sessionAuth: session,
      teamMembers,
      userId: session.id,
      protected: true,
    }, // Will be passed to the page component as props
  }
}
