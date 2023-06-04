import { useEffect, useState } from 'react';

export const ParticipantAttendees = ({ ids }) => {
    const [participants, setParticipants] = useState(null);
    useEffect(() => {
        const getParticipants = async () => {
            const response = await fetch(`/api/user/users?ids=${ids}`)
            const data = await response.json();
            setParticipants(data)
        }
        ids.length && getParticipants()
    }, [])

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px",
        background: "white",
        borderRadius: "5px",
        boxShadow: 24,
        padding: 20,
        display: "flex",
        flexDirection: "column",
    };

    return (
        <div style={style}>
            {participants ? participants.map((user) => {
                return (
                    <div key={user._id} style={{borderBottom: '1px solid gray'}}>
                        <h3> {user.firstName} {user.lastName} </h3>
                        <p>Développeur Web - Team Onboard</p>

                        {/* <Image
                            src="/static/images/man_user.png"
                            alt="joseph-gonzalez"
                            width={"100%"}
                            height={"100%"}
                            layout={"responsive"}
                            priority
                        /> */}
                    </div>
                )
            }) : <p>No user yet</p>}
        </div>
    );
};
