import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const Event = () => {
  return (
    <Card sx={{ display: "flex", height: 300, marginTop:4 }}>
      <CardActionArea>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Italian Restaurant
          </Typography>

          <Typography variant="body3" color="text.secondary">
            La Table des Artistes Courbevoie 92
          </Typography>
          <div>
            <Typography variant="body2" color="text.secondary">
              de 12:30pm à 2pm
            </Typography>

            <Typography variant="body2" color="text.secondary">
              The IT, Management and Commercial Development team joined this
              space
            </Typography>
          </div>

          <Typography variant="body2" color="text.secondary">
            See all participants
          </Typography>

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
