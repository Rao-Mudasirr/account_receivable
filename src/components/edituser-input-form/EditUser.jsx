import React from "react";
// import EditUserForm from "./EditUserForm";
import "./adduser.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import {  Card, Button } from "@mui/material";

const AddUser = () => {


  return (
    <Card className="users_container">
      <div className="users_card">
      <div className="adduser_header">
        <h2>Add New User</h2>
        <button>
        <HighlightOffIcon />
        </button>
      </div>
      <div>
        <AddUserForm/>
      </div>
      </div>
    </Card>
  );
};

export default AddUser;
