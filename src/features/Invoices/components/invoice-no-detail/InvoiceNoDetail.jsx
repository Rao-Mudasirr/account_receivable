import React, { useEffect } from "react";
import AddNote from "./add-note/AddNote";
import RecentEmailTable from "./recent-email-table/RecentEmailTable";
import "./invoice_no_detail.scss";
import { Button, Grid, Box, Typography } from "@mui/material";
import { useState } from "react";
import ViewInvoice from "../../../view-invoices/ViewInvoice";
import { useNavigate } from "react-router";
import GlobalButton from "../../../../components/global-button/global-button";
import Drawer from "@mui/material/Drawer";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
// import { useMediaQuery } from '@mui/material';

const InvoiceNoDetail = () => {
  const isSmallerThanMd = window.innerWidth;
  // console.log(window.innerWidth);
  const [state, setState] = React.useState({
    // top: false,
    // left: false,
    // bottom: false,
    right: true,
  });
  const [isAddNoteTrue, setIsAddNoteTrue] = React.useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const AllOverdue = () => {
    navigate("/overdue-invoices");
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  // console.log(window.innerWidth < 1200);
  useEffect(() => {
    function handleResize() {
      setIsAddNoteTrue(window.innerWidth > 1200); // Change the breakpoint value as per your requirement
    }

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const list = (anchor) => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <Box height="200px" width="50px" ></Box>
      <Divider />
     hjk */}
    </Box>
  );
  return (
    <>
      <Grid
        container
        spacing={2}
        className="invoice-no_container position-relative"
      >
        <Grid item xl={9.5} lg={11.9} md={12} xs={12}>
          <Typography className="font-weight-600 heading-20 tertiary-color">
            Invoice Details
            <button
            className="addnote_btn"
              style={{ position: "fixed", left: "75%" }}
              onClick={() => setIsAddNoteTrue(!isAddNoteTrue)}
            >
              show
            </button>
          </Typography>
          <Typography
            className="font-weight-600 secondary-heading tertiary-color"
            sx={{ mt: "50px" }}
          >
            Bratley Cooper
          </Typography>
          <Grid
            container
            display="flex"
            sx={{ justifyContent: { xs: "center" } }}
            className="justify-space-between"
          >
            <Grid
              xl={7.6}
              lg={6.89}
              md={12}
              xs={12}
              item
              className="flex justify-space-between"
            >
              <Box>
                <div style={{ display: "flex", marginTop: "40px" }}>
                  <Typography className="font-weight-600 heading-20 tertiary-color">
                    Invoice 1345
                  </Typography>
                  <span className="invoice-no_paid primary-title font-weight-600">
                    Paid
                  </span>
                </div>
                <Typography className="font-weight-400 primary-title secondary-color margin-top-0-8">
                  Issue Date
                </Typography>
                <Typography className="font-weight-400 primary-title secondary-color margin-top-0-8">
                  Due Date
                </Typography>
                <Typography className="font-weight-600 sub-heading secondary-color margin-top-0-8">
                  Total Amount
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <GlobalButton
                  sx={{ mt: "2.5rem" }}
                  btnText="View Invoice"
                  onClick={handleOpen}
                />
                <ViewInvoice
                  open={open}
                  handleClose={handleClose}
                  handleOpen={handleOpen}
                />
                <Typography className="font-weight-400 primary-title tertiary-color margin-top-0-8">
                  19/07/2022
                </Typography>
                <Typography className="font-weight-400 primary-title tertiary-color margin-top-0-8">
                  19/07/2023
                </Typography>
                <Typography className="font-weight-600 sub-heading tertiary-color margin-top-0-8">
                  £ 7100.00
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              sx={{
                backgroundColor: "#F0F0F2",
                p: "24px",
                borderRadius: "8px",
              }}
            >
              <Typography className="font-weight-600 heading-20 tertiary-color">
                Overdue Invoices
              </Typography>
              <Box className="flex justify-space-between">
                <div>
                  <Typography className="font-weight-400 secondary-title secondary-color margin-top-0-8">
                    Invoice 1140
                  </Typography>
                  <Typography className="font-weight-400 secondary-title secondary-color margin-top-0-8">
                    Invoice 1171
                  </Typography>
                  <Typography className="font-weight-400 secondary-title secondary-color margin-top-0-8">
                    Invoice 1191
                  </Typography>
                </div>
                <div>
                  <Typography className="font-weight-600 secondary-title tertiary-color margin-top-0-8">
                    £ 2112.00
                  </Typography>
                  <Typography className="font-weight-600 secondary-title tertiary-color margin-top-0-8">
                    £ 1537.00
                  </Typography>
                  <Typography className="font-weight-600 secondary-title tertiary-color margin-top-0-8">
                    £ 704.00
                  </Typography>
                </div>
              </Box>
              <GlobalButton
                sx={{ mt: "1rem", width: "300px" }}
                btnText="View All Invoices"
                onClick={AllOverdue}
              />
            </Grid>
          </Grid>
          <Grid item>
            <RecentEmailTable />
          </Grid>
        </Grid>
        {isAddNoteTrue && (
          <Grid
            item
            xs={0}
            className="position-relative"
            // sx={{ border: "1px solid red" }}
          >
            {/* {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              <GlobalButton
                btnText="Note History"
                onClick={toggleDrawer(anchor, true)}
              />

              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                // PaperProps={{ style: { backgroundColor: "transparent" } }}
              >
                {list(anchor)} */}
            {/* <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                  <Button variant="contained" {...bindTrigger(popupState)}>
                    Open Popover
                  </Button>
                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  > */}
                  <Grid position={{ xl: "static", xs: "absolute" }} height={'100%'}>
                    <AddNote />
                  </Grid>
                  {/* </Popover>
                </div>
              )}
            </PopupState> */}
            {/* </Drawer>
            </React.Fragment> */}
            {/* ))} */}
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default InvoiceNoDetail;
