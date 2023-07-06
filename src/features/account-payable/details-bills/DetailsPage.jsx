import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  InputAdornment,
  Typography
} from "@mui/material";
import CustomInput from "../../../components/CustomInput";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Image from "../../../assests/bills/file.png";
import { ReactComponent as FullScreen } from "../../../assests/bills/maximize.svg";
import { ReactComponent as Pound } from "../../../assests/bills/pound-sign.svg";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import './details.scss'
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import AddIcon from '@mui/icons-material/Add';
import PendingScreen from "../../DocumentApproval/PendingScreen";

const DetailsPage = ({ open, handleClose }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [value, setValue] = useState(0);
  const [openModel, setOpenModel] = useState({
    model: false,
    type: 0,
  });


  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      
       
     
      <DialogContent>

        <PendingScreen/>
      </DialogContent>
      {/* <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions> */}
    </Dialog>
  );
};

export default DetailsPage;