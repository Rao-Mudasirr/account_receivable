import React from "react";
import AddUserForm from "./AddUserForm";
import "./adduser.scss";
import { SimpleDialog } from "../../../../../components/modal/simple-dialog";

const AddUser = (props) => {
  const { openAddForm, handleCloseAddForm } = props;

  return (
    <SimpleDialog handleClose={handleCloseAddForm} open={openAddForm} title="Add New User" titleClass="adduser_header primary-color font-weight-600 heading-20">
      <AddUserForm />
    </SimpleDialog>
  );
};

export default AddUser;
