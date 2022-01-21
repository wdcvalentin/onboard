import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { formatDateHM } from "../../utils/dateFormat";

export const Event = ({ name, description, date, participants }) => {
  return (
    <Card sx={{ display: "flex", height: 300, marginTop: 4 }}>
      <CardActionArea>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>

          <Typography variant="body3" color="text.secondary">
            {description}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {formatDateHM(date)}
          </Typography>


          {participants.length > 0 ?
            <Typography variant="body2" color="text.secondary">${participants.length} joined</Typography>
            : null}

          <CardActions>
            <Button size="small" variant="outlined">
              Join
            </Button>
          </CardActions>
        </CardContent>
      </CardActionArea>
      <CardMedia
        sx={{ width: 300, margin: 2, borderRadius: 2 }}
        component="img"
        image="https://www.tourismebretagne.com/app/uploads/crt-bretagne/2018/11/le-grand-be-restaurant-1-1920x960.jpg"
        alt="green iguana"
      />
    </Card>
  );
};
