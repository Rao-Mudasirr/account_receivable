import React from 'react'
import { Box, IconButton, darken } from "@mui/material";

// @mui icons
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DownloadIcon from "@mui/icons-material/Download";
import AddIcon from "@mui/icons-material/Add";
import ShareIcon from "@mui/icons-material/Share";
import RefreshIcon from "@mui/icons-material/Refresh";
import DiagreamIcon from "../../assests/svg/diagram.svg";

import PrintIcon from "@mui/icons-material/Print";
// import { ShareIcon } from "react-icons/fa";

// ----------------------------------------------------------------------

const TableAction = ({
  type = "edit",
  onClicked = () => {},
  ...other
}) => {
  return (
    <IconButton
      onClick={onClicked}
      sx={(theme) => styles.btnStyle(theme, type)}
      {...other}
      size="small"
    >
      {icons[type]}
    </IconButton>
  );
};

export default TableAction;

// ----------------------------------------------------------------------
// Styles
const styles = {
  btnStyle: (theme, type) => {
    let backgroundColor = "#919EAB";
    

    // switch (type) {
    //   case "add":
    //     backgroundColor = "#F6830F";
    //     break;
    //   case "delete":
    //     backgroundColor = "#DC3545";
    //     break;
    //   case "view":
    //     backgroundColor = "#21130d";
    //     break;
    //   case "download":
    //     backgroundColor = "#229A16";
    //     break;
    //   case "refresh":
    //     backgroundColor = "#23183D";
    //     break;
    //   // share icon
    //   case "share":
    //     backgroundColor = "#23183D";
    //     break;
    //   case "diagram":
    //     backgroundColor = "#F6830F";
    //     break;
    //   // share icon
    //   case "share":
    //     backgroundColor = "#23183D";
    //     break;

    //   //  print icon
    //   case "print":
    //     backgroundColor = "#F6830F";
    //     break;

    //   // header share icon
    //   case "headerShare":
    //     backgroundColor = "#23183D";
    //     break;
    // }
    // return {
    //   backgroundColor,
    //   color: "black",
    //   ":hover": {
    //     backgroundColor: darken(backgroundColor, 0.15),
    //   },
    // };
  },
  iconStyles: (theme, iconColor) => ({
    color: iconColor,
  }),
};

// ----------------------------------------------------------------------
// Icons Object
const icons = {
  edit: (
    <ModeEditIcon
      fontSize="small"
      sx={(theme) => styles.iconStyles(theme, "#21130d")}
    />
  ),
  add: (
    <AddIcon
      fontSize="small"
      sx={(theme) => styles.iconStyles(theme, "#21130d")}
    />
  ),
  delete: (
    <DeleteIcon
      fontSize="small"
      sx={(theme) => styles.iconStyles(theme, "#21130d")}
    />
  ),
  view: (
    <VisibilityIcon
      fontSize="small"
      sx={(theme) => styles.iconStyles(theme, "#21130d")}
    />
  ),
  download: (
    <DownloadIcon
      fontSize="small"
      sx={(theme) => styles.iconStyles(theme, "#fff")}
    />
  ),
  refresh: (
    <RefreshIcon
      fontSize="small"
      sx={(theme) => styles.iconStyles(theme, "#fff")}
    />
  ),
  diagram: (
    <Box fontSize="small" sx={(theme) => styles.iconStyles(theme, "#fff")}>
      <img src={DiagreamIcon} alt="diagramicon" height={25} width={25} />
    </Box>
  ),
  // share icon
  share: (
    <ShareIcon
      fontSize="small"
      sx={(theme) => styles.iconStyles(theme, "#fff")}
    />
  ),
  // print icon
  print: (
    <PrintIcon
      fontSize="medium"
      sx={(theme) => styles.iconStyles(theme, "#fff")}
    />
  ),
  // header share icon
  headerShare: (
    <ShareIcon
      sx={{ color: "#fff", padding: "1px", fontSize: "25px" }}
    />
  ),
};
