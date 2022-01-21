import {Button, Grid, Modal} from '@mui/material';
import {useState} from 'react';
import {Event} from "../../components/events/event";
import {FormEvent} from '../../components/events/FormEvent';
import SideBar from '../../components/layout/sidebar';
import {FiPlus} from "react-icons/fi";

export default function Events() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={"dashboard--section"}>
      <SideBar/>
      <div className='dashboard--container'>
        <div className={"dashboard--heading"}>
          <h2>Events</h2>
          <button onClick={handleOpen} className={"dashboard--cta"}>
            Add new event <FiPlus/>
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
             <FormEvent/>
           </Modal>
           <Event/>
           <Event/>
           <Event/>
           <Event/>
         </div>
        </div>
      </div>
    </div>
  )
}