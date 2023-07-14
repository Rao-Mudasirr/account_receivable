 import React from "react";
 import { Box, Button, Typography, IconButton, Grid, Autocomplete, TextField } from "@mui/material";
 import { ReactComponent as CloseIcon } from "../../../assests/svg/model-close.svg";
 import CustomInput from "../../../components/CustomInput";
// // import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
 import "../LinkNewCard/styles.scss"
 import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

 import InputAdornment from "@material-ui/core/InputAdornment";
import Modal from '@mui/material/Modal';
import { AUTOCOMPLETEINPUT, ListBoxPaper } from "../../../layout/components/header/components/search-card/search-card-mui-style";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 650,
  height:900,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 10,
  p: 4,
};
//Style
const Styles = {
    field_color: (theme) => ({
      "& .MuiInput-underline:after": {
        borderBottomColor: "#2B2B33",
      },
      "& .Mui-error:after": {
        borderBottomColor: "#d32f2f",
      },
      "& .Mui-error:before": {
        borderBottomColor: "#d32f2f !important",
      },
      "& input": {
        paddingLeft: "15px",
        pb: "10px",
      },
      "& .MuiInputBase-root:hover": {
        backgroundColor: "#F0F0F2",
      },
      "& :before": {
        borderBottom: "1.6px solid #C4C4CC !important",
      },
    }),
    font_family: (theme) => ({
      className: "font-family-Exo",
    }),
  };
const style1={};
function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const handleClick = () => {
        // Handle click logic here
      };
    return (
     
      <React.Fragment>
           <Box className="save-button ">
        <Button onClick={handleOpen}>save</Button>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style1, width: 200 }}>
            <h2 id="child-modal-title">Text in a child modal</h2>
            <p id="child-modal-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <Button onClick={handleClose}>Close Child Modal</Button>
          </Box>
        </Modal>
      </React.Fragment>
    );
  }
export default function LinkNewCard () {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const condition1 = [
    {
      title: "Barclays",
      value: "Barclays",
    },
    {
      title: "Natwest",
      value: "Natwest",
    },
    {
      title: "Some other Bank",
      value: "Some other Bank",
    },
  ];
  return (
    <div>
      <Button onClick={handleOpen}  style={{
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: 'lightgray',
        },
      }}>Linked New Card</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Box className="model-body">
      <Box className="documentApprovalModel-model">
        <Box className="top-section">
           <Typography variant="h6" style={{ fontWeight: 'bold', color: 'black' }}>Link New Card</Typography>
           <IconButton onClick={handleClose} style={{ cursor: "pointer", zIndex: 200 }}>
             <CloseIcon />
           </IconButton>
         </Box>
        <Box className="documentApprovalModel-model-body">
                <Box sx={{ marginBottom: "60px" }}>
             
                 <Autocomplete
                          
                     id="search-which-is-on-sidebar-already"
                    sx={{ transition: 'all .25s linear', ".MuiInputBase-root": { pr: '10px !important' }, width: { sm: '580px', xs: '170px' }, color:'Black' }}
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    ListboxProps={{ className: 'header-search-card', style: { maxHeight: "210px", paddingTop: 0, paddingBottom: 0 } }}
                    size="small"
                    PaperComponent={ListBoxPaper}
                          
                            options={condition1}
                            getOptionLabel={(option) => option.title}
                            renderInput={(params) => (
                              <TextField  id="standard-basic"  variant="standard"
                                  {...params} sx={{AUTOCOMPLETEINPUT,display: "flex" }}
                                placeholder="Type Here "
                                InputProps={{
                                  ...params.InputProps,
                                  endAdornment: (

                                    <InputAdornment position="end" color= "red">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <path
                                        d="M11 20.75C5.62 20.75 1.25 16.38 1.25 11C1.25 5.62 5.62 1.25 11 1.25C16.38 1.25 20.75 5.62 20.75 11C20.75 16.38 16.38 20.75 11 20.75ZM11 2.75C6.45 2.75 2.75 6.45 2.75 11C2.75 15.55 6.45 19.25 11 19.25C15.55 19.25 19.25 15.55 19.25 11C19.25 6.45 15.55 2.75 11 2.75Z"
                                        fill="#777777"
                                      />
                                      <path
                                        d="M20.16 22.79C20.08 22.79 20 22.78 19.93 22.77C19.46 22.71 18.61 22.39 18.13 20.96C17.88 20.21 17.97 19.46 18.38 18.89C18.79 18.32 19.48 18 20.27 18C21.29 18 22.09 18.39 22.45 19.08C22.81 19.77 22.71 20.65 22.14 21.5C21.43 22.57 20.66 22.79 20.16 22.79ZM19.56 20.49C19.73 21.01 19.97 21.27 20.13 21.29C20.29 21.31 20.59 21.12 20.9 20.67C21.19 20.24 21.21 19.93 21.14 19.79C21.07 19.65 20.79 19.5 20.27 19.5C19.96 19.5 19.73 19.6 19.6 19.77C19.48 19.94 19.46 20.2 19.56 20.49Z"
                                        fill="#777777"
                                      />
                                    </svg>
                                  </InputAdornment>
                                  ),
                                  className: "font-family-Exo padding-left-2",
                                }}
                              />
                            )}
                          />

                </Box>
                <Box sx={{ marginBottom: "60px" }}>
                    <CustomInput
                    className="width-100"
                    placeholder="Card Number Format"
                    inputProps={{
                        className: "font-family-Exo padding-left-2",
                    }}
                    required={false}
                    label="Name on Card"
                    />
                </Box>
                <Box sx={{ marginBottom: "60px" }}>
                    <CustomInput
                    className="width-100"
                    placeholder="Card Number Format"
                    inputProps={{
                        className: "font-family-Exo padding-left-2",
                    }}
                    required={false}
                    label="Card Number"
                    />
                </Box>
                <Grid container item xs={12}  sx={{ display: "flex", flexDirection: { md: "row", xs: "column" ,mt:2 }, gap: 6 }}>
                    <Box sx={{ marginBottom: "80px" ,display: "flex" }}>
                    <CustomInput
                        placeholder="4421"
                        className="width-50"
                      
                        inputProps={{
                        className: "font-family-Exo padding-left-2",
                        }}
                        required={false}
                        label="CVN Number"
                    />
                    </Box>
                    <Box sx={{ marginBottom: "80px"}}>
                     <CustomInput
                        className="width-50"
                        placeholder="18/20"
                        inputProps={{
                        className: "font-family-Exo padding-left-2",
                        }}
                        required={false}
                        label="Expiry Date"




                        
                    />
                   
                    </Box>
                </Grid>
                <Box className="save-button ">
                    <Button onClick={ handleOpen} sx={{
                        color:'white'

                    }} >
                        SAVE
                    {/* <ChildModal /> */}
                    </Button>
                </Box>
                </Box>
        </Box>
        </Box>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}