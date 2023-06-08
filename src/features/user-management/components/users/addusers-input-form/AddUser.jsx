import React from "react";
import AddUserForm from "./AddUserForm";
import "./adduser.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Dialog } from "@mui/material";

const AddUser = (props) => {
  const { openAddForm, handleCloseAddForm } = props;

  return (
    <Dialog open={openAddForm} onClose={handleCloseAddForm}>
    <div className="users_container">
          <div className="users_card">
            <div className="adduser_header">
              <h2>Add New User</h2>
              <button onClick={handleCloseAddForm}>
                <HighlightOffIcon />
              </button>
            </div>
            <div>
              <AddUserForm />
            </div>
          </div>
        </div>
      </Dialog>
  );
};

export default AddUser;
