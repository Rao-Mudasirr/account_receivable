import React from "react";
import AddUserForm from "./AddUserForm";
import "./adduser.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import {  Card, Button, Dialog } from "@mui/material";

const AddUser = (props) => {
  const { openForm, handleCloseForm } = props;

  return (
    <Dialog open={openForm} onClose={handleCloseForm} sx={{backgroundColor: "transparent"}}>
    <div className="users_container">
      <div className="users_card">
      <div className="adduser_header">
        <h2>Add New User</h2>
        <button onClick={handleCloseForm}>
        <HighlightOffIcon />
        </button>
      </div>
      <div>
        <AddUserForm/>
      </div>
      </div>
    </div>
    </Dialog>
  );
};

export default AddUser;
