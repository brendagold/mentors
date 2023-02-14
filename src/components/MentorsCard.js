import {useState} from "react";
import {
  Box,
  CardMedia,
  Card,
  CardContent,
  Button,
  Typography,
  Modal
} from "@mui/material";
import RequestForm from "./RequestForm";

const styles = {
    modalStyle: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
      },
}

export default function MentorsCard({data}) {
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
  return (
    <Card sx={{ display: "flex", marginTop: "50px", marginLeft: "20px", width: "50%", height: "250px" }}>
      <CardMedia
        component="img"
        sx={{ width: 200, height: 200, marginTop: "20px" }}
        image={data.profile_img}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
          {data.firstname} {data.lastname}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="p">
          {data.occupation}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="p">
            {data.expertise}
          </Typography>
          <div className="mentorCont" >
                      <Button
                        onClick={handleOpen}
                        variant="contained"
                        color="primary"
                        sx={{ fontWeight: "bold" }}
                      >
                        Request
                      </Button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={styles.modalStyle}>
                          <RequestForm />
                        </Box>
                      </Modal>
                    </div>
        </CardContent>
      </Box>
    </Card>
  );
}
