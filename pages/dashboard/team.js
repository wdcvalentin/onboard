import { getSession } from 'next-auth/react';
import { useState  } from 'react';
import { Modal } from '@mui/material';
import { FiPlus } from 'react-icons/fi';
import SideBar from '../../components/layout/sidebar';
import { CardUser } from '../../components/teams/CardUser';
import { FormAddUser } from '../../components/teams/FormAddUser';

export default function Teams({ teamMembers, userId, companyId }) {
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
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <FormAddUser 
              setOpen={setOpen}
              onSubmit={handleSubmit}
              companyId={companyId}
              teamMembers={teamMembers} />
        </Modal>
        </div>
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

  const URL = process.env.NEXTAUTH_URL;
  const responseCompany = await fetch(`${URL}/api/user/my-company?userId=${session.id}`)
  const company = await responseCompany.json();
  const teamMembersResponse = await fetch(`${URL}/api/user/users?ids=${company.workers}`)
  const teamMembers = await teamMembersResponse.json();
  return {
    props: {
      sessionAuth: session,
      teamMembers,
      userId: session.id,
      companyId: company._id,
      protected: true,
    },
  }
}
