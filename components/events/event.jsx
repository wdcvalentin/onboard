import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image'
import { FiClock, FiUsers } from 'react-icons/fi'
import { BiDetail } from 'react-icons/bi'
import { formatDateHM } from '../../utils/dateFormat'
import { Modal } from '@mui/material';
import { ParticipantAttendees } from './ParticipantAttendees';

export const Event = ({ eventId, name, description, date, participants, userId }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const whoJoin = (participants) => participants.length
    ? (<p><FiUsers />
      <button onClick={handleOpen} className={"show-participants--cta"}>
        <strong>{participants.length}</strong>
      </button>
      joined </p>)
    : (<p><FiUsers /> Be the first one to join </p>)
  const seeParticipantsCTA = (nbParticipant) => {
    if (nbParticipant) {
      return (
        <button onClick={handleOpen} className={"simple--cta spaced"}>See participants</button>
      )
    }
  }
  const isUserJoinedEvent = () => participants.some((uid) => uid === userId)
  const joinEvent = async () => {
    const headers = {
      "Content-Type": "application/json"
    };
    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify({
        userId,
        eventId,
      })
    };
    const response = await fetch(`/api/event/attendees`, options);
    const data = await response.json();
    router.replace(router.asPath);
  }

  return (
    <div className={"card"}>
      <div className={"card--container"}>
        <div className={"card--content"}>
          <div className={"card--info"}>
            <h3>{name}</h3>
            <p><BiDetail /> {description}</p>
            <p><FiClock /> {formatDateHM(date)} </p>
            {whoJoin(participants)}
          </div>
          <div className={"card--cta spaced"}>
            {seeParticipantsCTA(participants)}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <ParticipantAttendees ids={participants} />
            </Modal>
            <button disabled={isUserJoinedEvent()} onClick={() => joinEvent()} className={"event--cta"}>
              {isUserJoinedEvent() ? 'You have joined this event' : 'Join'}
            </button>
          </div>
        </div>
        <div className={"card--image"}>
          <Image
            src={"/static/images/italian-restaurant.jpg"}
            alt={""}
            width={"0"}
            height={"0"}
            layout='responsive'
          />
        </div>
      </div>
    </div>
  )
}