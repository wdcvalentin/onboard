import { Button, Grid, Modal } from '@mui/material';
import { useState } from 'react';
import styles from "../../assets/css/dashboard.module.css";
import { Event } from "../../components/events/event";
import { FormEvent } from '../../components/events/FormEvent';
import SideBar from '../../components/layout/sidebar';

export default function Events() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Grid container direction="row" className='body'>
            <SideBar />

            <Grid className={styles.main_content}>
                <Grid>
                    <h1 className={`${styles.title_menu}`}>Events</h1>
                    <Button onClick={handleOpen}>Open modal</Button>
                </Grid>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Grid>
                        <FormEvent />
                    </Grid>
                </Modal>


                <Event />
                <Event />
                <Event />
                <Event />
                <Event />
                <Event />
            </Grid>
        </Grid>
    )
}

