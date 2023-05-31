import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useTheme } from "@emotion/react";
import { Backdrop, Button, Grid, Typography } from "@mui/material";
import DeleteIcon from "../../assests/svg/trash-red.png";
//---icons

const DeleteModel = (props) => {
  //---usestate handlers and themes
  const { open, handleClose, onDeleteClick } = props;
  const theme = useTheme();

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Box sx={Styles.root}>
          <Grid container>
            <Grid xs={12} item>
              <Box sx={Styles.innerBox(theme)}>
           
              <Box sx={{ border: "1px solid black", p: 2.5, borderRadius: "50%", bgcolor:"#fff"}}>
                <img src={DeleteIcon} alt="" />
              </Box>
                <Box sx={{ pt: "24px", textAlign: "center" }}>
                  <Typography variant="h3" sx={Styles.heading}>Are you sure ?</Typography>
                  <Typography variant="h5" sx={{ fontWeight: "400", color: "#2B2B33", fontSize: "14px", pt:3 }}>
                    You want to Delete
                  </Typography>
                </Box>
                <Box sx={Styles.buttonWrapper}>
                  <Button
                    onClick={onDeleteClick}
                    sx={Styles.buttonError(theme)}
                  >
                    Yes, Sure
                  </Button>
                  <Button
                    onClick={handleClose}
                    sx={Styles.buttonSuccess(theme)}
                  >
                    Cancel
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
};

export default DeleteModel;
//-----------------------------------------------------------------------
// styles
const Styles = {
  root: (theme) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "95%", sm: 500 },
    borderRadius: "4px",
    boxShadow: 24,
    px: 2,
    py: 2,
  }),
  innerBox: (theme) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // pt: "10px"
  }),
  buttonWrapper: (theme) => ({
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    mt: 3.5,
    mb: 1
  }),
  buttonError: (theme) => ({
    bgcolor: "#2B2B33",
    color: "#fff",
    "&:hover": { bgcolor: "#2B2B33" },
    px: 2,
    py: 1,
    fontSize: "16px !important",
    textTransform: 'capitalize',
    fontWeight: "400"
  }),
  buttonSuccess: (theme) => ({
    bgcolor: "#fff",
    color: "#2B2B33",
    minWidth: "100px",
    "&:hover": { bgcolor: "#fff" },
    fontSize: "16px !important",
    border: "1px solid #2B2B33",
    fontWeight: "400",
    textTransform: 'capitalize'
  }),
  heading: { fontSize: "20px", fontWeight: "600", color: "#2B2B33" }
};
