import {Button, Grid, Modal} from '@mui/material';
import {useState} from 'react';
import {Event} from "../../components/events/event";
import {FormEvent} from '../../components/events/FormEvent';
import SideBar from '../../components/layout/sidebar';
import {FiPlus} from "react-icons/fi";

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
        <Grid container direction="row" className='body'>
            <SideBar />

            <Grid className={"main_content"}>
                <Grid>
                    <h1 className={"title_menu"}>Events</h1>
                    <Button onClick={handleOpen}>Create an Event</Button>
                </Grid>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Grid>
                        <FormEvent fetchEvents={fetchEvents} onSubmit={handleSubmit} />
                    </Grid>
                </Modal>

                {events && events.map((event) => (
                    <Event
                        key={event._id}
                        name={event.name}
                        description={event.description}
                        date={event.eventDate}
                        participants={event.eventAttendees} />
                ))}
            </Grid>
        </Grid>
    )
}