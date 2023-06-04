import { getSession } from 'next-auth/react';
import { Modal } from '@mui/material';
import { useState } from 'react';
import { FiPlus } from "react-icons/fi";
import SideBar from '../../components/layout/sidebar'
import { FormActivity } from '../../components/activity/FormActivity';

export default function Activity({ activities, userId }) {
  console.log('userId', userId)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = () => setOpen(false);
  const handleDayBtn = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return days.map((day) => {
      return (<h3>{day}</h3>)
    })
  }
  return (
    <div className={"dashboard--section"}>
      <SideBar />
      <div className={'dashboard--container'}>
        <div className={"dashboard--heading"}>
          <h2>Activity</h2>
          <button onClick={handleOpen} className={"dashboard--cta"}>
            Add Activity <FiPlus />
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <FormActivity userId={userId} onSubmit={handleSubmit} />
          </Modal>
        </div>
        <div className={"activity--container"}>
          <div className={"activity-container-header"}>
            <div className='activity-card--container'><strong>activities carried out</strong></div>
            <div className='activity-card--container'>Favorite activity</div>
            <div className='activity-card--container'>last activity</div>
          </div>

          <div className={"activity-container-planning-container activity-card--container"}>
            <div className='activity-days-btn'>
              {handleDayBtn()}
            </div>

            <div>
              {activities.map((activity) => {
                return (
                  <div>
                    <h4>{activity.name}</h4>
                  </div>
                )
              })}
            </div>
            </div>
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
  const response = await fetch(`${URL}/api/user/company-activity?id=${session.id}`)
  const activities = await response.json();
  console.log('activities', activities)
  return {
    props: {
      sessionAuth: session,
      activities,
      userId: session.id,
      protected: true,
    },
  }
}
