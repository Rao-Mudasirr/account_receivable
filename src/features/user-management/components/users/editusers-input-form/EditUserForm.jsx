import React, { useState } from "react";
import {
  Grid,
  Button,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField, Select } from "formik-material-ui";
import * as Yup from "yup";
import "./edituser.scss";


const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  role: "",
};

const companyOptions = [
  { value: "Mortgage Basket", label: "Mortgage Basket" },
  { value: "Share my Dine", label: "Share my Dine" },
  { value: "Identity Gram", label: "Identity Gram" },
  { value: "FosterApp", label: "FosterApp" },
];

const roleOptions = [
  { value: "Manager", label: "Manager" },
  { value: "Admin", label: "Admin" },
];

const EditUserInputs = () => {
  const [hiddenLabels, setHiddenLabels] = useState([]);


  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  const handleClear = (resetForm) => {
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {(props) => {
        const { values, resetForm } = props;

        return (
          <Form noValidate autoComplete="off" className="edituser_form">
            <Grid sx={{ gap: 5 }} className="edituser_forminputs">
              <Grid
                item
                xs={6}
                className="textfield_bold">
                <label className="input_label">
                  First Name
                </label>
                <Field
                  className="usersform_textfield"
                  component={TextField}
                  name="firstName"
                  variant="standard"
                  placeholder="First Name"
                />
              </Grid>

              <Grid
                item
                xs={6}
                className="textfield_bold">
                <label className="input_label">
                  Last Name
                </label>
                <Field
                  className="usersform_textfield"
                  component={TextField}
                  name="lastName"
                  variant="standard"
                  placeholder="Last Name"
                />
              </Grid>

              <Grid
                item
                xs={6}
                className="textfield_bold">
                <label className="input_label">
                  Email
                </label>
                <Field
                  className="usersform_textfield"
                  component={TextField}
                  name="email"
                  variant="standard"
                  placeholder="Email"
                  type="email"
                />
              </Grid>

              <Grid
                item
                xs={6}
                className="textfield_bold">
                <label className="input_label">
                  Phone
                </label>
                <Field
                  className="usersform_textfield"
                  component={TextField}
                  name="phone"
                  variant="standard"
                  placeholder="Phone"
                  type="tel"
                  inputProps={{
                    style: { MozAppearance: "textfield" },
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                  }}
                />
              </Grid>

              <Grid
                item
                xs={6}
                className="textfield_bold">
                <label className="input_label">
                  Company
                </label>
                <Field
                  className="usersform_textfield"
                  component={Select}
                  name="company"
                  variant="standard"
                >
                  {companyOptions.map((option, index) => (
                    <MenuItem key={option.value} value={option.value}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={option.value === values.company}
                            color="primary"
                          />
                        }
                        label={option.label}
                      />
                    </MenuItem>
                  ))}
                </Field>
              </Grid>

              <Grid
                item
                xs={6}
                className="textfield_bold">
                <label className="input_label">
                  Role
                </label>
                <Field
                  className="usersform_textfield"
                  component={Select}
                  name="role"
                  variant="standard"
                >
                  {roleOptions.map((option, index) => (
                    <MenuItem key={option.value} value={option.value}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={option.value === values.role}
                            color="primary"
                          />
                        }
                        label={option.label}
                      />
                    </MenuItem>
                  ))}
                </Field>
              </Grid>
            </Grid>
            <Grid className="useredit_btn">
              <Button variant="outlined" onClick={() => handleClear(resetForm)}>
                Clear
              </Button>
              <Button variant="contained" type="submit">
                Update
              </Button>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default EditUserInputs;
