import { Modal } from '@mui/material';
import { useEffect, useState } from 'react';
import { FiPlus } from "react-icons/fi";
import { getEventsOfUsersCompany } from '../../api/event';
import { Event } from "../../components/events/event";
import { FormEvent } from '../../components/events/FormEvent';
import SideBar from '../../components/layout/sidebar';


export default function Events() {
    const [open, setOpen] = useState(false);
    const [events, setEvents] = useState(null);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(async () => {
        await fetchEvents();
    }, [])

    const fetchEvents = async () => {
        const authToken = localStorage.getItem('token');
        const { data } = await getEventsOfUsersCompany(authToken);
        return setEvents(data);
    }
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
                            <FormEvent fetchEvents={fetchEvents} onSubmit={handleSubmit} />
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