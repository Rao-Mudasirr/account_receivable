import React from "react";
import EditUserForm from "./EditUserForm";
import "./edituser.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import {  Card, Button, Dialog } from "@mui/material";

const EditUser = (props) => {
  const { openForm, handleCloseForm } = props;


  return (
    <Dialog open={openForm} onClose={handleCloseForm}>
      <div className="users_container">
      <div className="users_card">
      <div className="edituser_header">
        <h3>Edit User Details</h3>
        <button onClick={handleCloseForm}>
        <HighlightOffIcon />
        </button>
      </div>
      <div>
        <EditUserForm/>
      </div>
      </div>
      </div>
      </Dialog>
  );
};

export default EditUser;
