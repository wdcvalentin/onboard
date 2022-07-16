import { getSession } from 'next-auth/react';
import { Modal } from '@mui/material';
import { useState } from 'react';
import { FiPlus } from "react-icons/fi";
import { Event } from "../../components/events/event";
import { FormEvent } from '../../components/events/FormEvent';
import SideBar from '../../components/layout/sidebar';

export default function Events({ events, userId }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit = () => setOpen(false);

    return (
        <div className={"dashboard--section"}>
            <SideBar />
            <div className='dashboard--container'>
                <div className={"dashboard--heading"}>
                    <h2>Events</h2>
                    <button onClick={handleOpen} className={"dashboard--cta"}>
                        Add new event <FiPlus />
                    </button>
                </div>
                <div className={"event--wrapper"}>
                    <div className={"event--container"}>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <FormEvent userId={userId} onSubmit={handleSubmit} />
                        </Modal>
                        {events && events.map((event) => (
                            <Event
                                key={event._id}
                                name={event.name}
                                description={event.description}
                                date={event.eventDate}
                                participants={event.eventAttendees} />
                        ))}
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

    const URL = process.env.NODE_ENV !== 'development' ? process.env.NEXT_LOCAL_URL : process.env.NEXT_PUBLIC_HOST_API_URL;
    const response = await fetch(`${URL}/api/user/company-event?id=${session.id}`)
    const events = await response.json();
  
    return {
      props: {
        sessionAuth: session,
        events,
        userId: session.id,
        protected: true,
      }, // Will be passed to the page component as props
    }
  }