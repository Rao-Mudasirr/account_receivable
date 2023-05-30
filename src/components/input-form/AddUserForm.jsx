import React, { useState } from "react";
import { Grid, Button, MenuItem } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField, Select } from "formik-material-ui";
import * as Yup from "yup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./adduser.css";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  company: Yup.string().required("Company is required"),
  role: Yup.string().required("Role is required"),
});

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

const AddUserInputs = () => {
  const [hiddenLabels, setHiddenLabels] = useState([]);

  const handleLabelHover = (index) => {
    setHiddenLabels((prevHiddenLabels) => {
      const updatedHiddenLabels = [...prevHiddenLabels];
      updatedHiddenLabels[index] = true;
      return updatedHiddenLabels;
    });
  };

  const handleLabelMouseLeave = (index) => {
    setHiddenLabels((prevHiddenLabels) => {
      const updatedHiddenLabels = [...prevHiddenLabels];
      updatedHiddenLabels[index] = false;
      return updatedHiddenLabels;
    });
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values); // Handle form submission logic here
    resetForm();
  };

  const handleClear = (resetForm) => {
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(props) => {
        const { values, resetForm } = props;

        return (
          <Form noValidate autoComplete="off" className="adduser_form">
            <Grid sx={{ gap: 5 }} className="adduser_forminputs">
              <Grid item xs={6}>
                <label
                  className={`input_label ${hiddenLabels[0] ? "hide_label" : ""}`}
                  onMouseEnter={() => handleLabelHover(0)}
                  onMouseLeave={() => handleLabelMouseLeave(0)}
                >
                  {hiddenLabels[0] ? null : <span className="asterisk" style={{color: "red", marginTop: "-5px"}}>*</span>}
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
              <Grid item xs={6}>
                <label
                  className={`input_label ${hiddenLabels[1] ? "hide_label" : ""}`}
                  onMouseEnter={() => handleLabelHover(1)}
                  onMouseLeave={() => handleLabelMouseLeave(1)}
                >
                  {hiddenLabels[1] ? null : <span className="asterisk" style={{color: "red", marginTop: "-5px"}}>*</span>}
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
              <Grid item xs={6}>
                <label
                  className={`input_label ${hiddenLabels[2] ? "hide_label" : ""}`}
                  onMouseEnter={() => handleLabelHover(2)}
                  onMouseLeave={() => handleLabelMouseLeave(2)}
                >
                  {hiddenLabels[2] ? null : <span className="asterisk" style={{color: "red", marginTop: "-5px"}}>*</span>}
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
              <Grid item xs={6}>
                <label
                  className={`input_label ${hiddenLabels[3] ? "hide_label" : ""}`}
                  onMouseEnter={() => handleLabelHover(3)}
                  onMouseLeave={() => handleLabelMouseLeave(3)}
                >
                  {hiddenLabels[3] ? null : <span className="asterisk" style={{color: "red", marginTop: "-5px"}}>*</span>}
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
              <Grid item xs={6}>
                <label
                  className={`input_label ${hiddenLabels[4] ? "hide_label" : ""}`}
                  onMouseEnter={() => handleLabelHover(4)}
                  onMouseLeave={() => handleLabelMouseLeave(4)}
                >
                  {hiddenLabels[4] ? null : <span className="asterisk" style={{color: "red", marginTop: "-5px"}}>*</span>}
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
              <Grid item xs={6}>
                <label
                  className={`input_label ${hiddenLabels[5] ? "hide_label" : ""}`}
                  onMouseEnter={() => handleLabelHover(5)}
                  onMouseLeave={() => handleLabelMouseLeave(5)}
                >
                  {hiddenLabels[5] ? null : <span className="asterisk" style={{color: "red", marginTop: "-5px"}}>*</span>}
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
            <Grid className="useradd_btn">
              <Button variant="outlined" onClick={() => handleClear(resetForm)}>
                Clear
              </Button>
              <Button variant="contained" type="submit">
                Add
              </Button>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddUserInputs;

