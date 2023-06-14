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
import "./adduser.scss";

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
  const [filledFields, setFilledFields] = useState({});

  const handleInputChange = (e, formik) => {
    const { name, value } = e.target;
    formik.setFieldValue(name, value);
    setFilledFields((prevFilledFields) => ({
      ...prevFilledFields,
      [name]: value.trim() !== "",
    }));
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values); // Handle form submission logic here
    resetForm();
    setFilledFields({});
  };

  const handleClear = (resetForm) => {
    resetForm();
    setFilledFields({});
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
              <Grid
                item
                xs={6}
                className={`textfield_bold ${
                  filledFields.firstName ? "hide_label" : ""
                }`}
              >
                <label className="input_label">
                  {filledFields.firstName ? null : (
                    <span
                      className="asterisk"
                      style={{ color: "red", marginTop: "-3px" }}
                    >
                      *
                    </span>
                  )}
                  First Name
                </label>
                <Field
                sx={Styles.field_color}
                  className="usersform_textfield"
                  component={TextField}
                  name="firstName"
                  variant="standard"
                  placeholder="First Name"
                  onChange={(e) => handleInputChange(e, props)}
                />
              </Grid>

              <Grid
                item
                xs={6}
                className={`textfield_bold ${
                  filledFields.lastName ? "hide_label" : ""
                }`}
              >
                <label className="input_label">
                  {filledFields.lastName ? null : (
                    <span
                      className="asterisk"
                      style={{ color: "red", marginTop: "-3px" }}
                    >
                      *
                    </span>
                  )}
                  Last Name
                </label>
                <Field
                sx={Styles.field_color}
                  className="usersform_textfield"
                  component={TextField}
                  name="lastName"
                  variant="standard"
                  placeholder="Last Name"
                  onChange={(e) => handleInputChange(e, props)}
                />
              </Grid>

              <Grid
                item
                xs={6}
                className={`textfield_bold ${
                  filledFields.email ? "hide_label" : ""
                }`}
              >
                <label className="input_label">
                  {filledFields.email ? null : (
                    <span
                      className="asterisk"
                      style={{ color: "red", marginTop: "-3px" }}
                    >
                      *
                    </span>
                  )}
                  Email
                </label>
                <Field
                sx={Styles.field_color}
                  className="usersform_textfield"
                  component={TextField}
                  name="email"
                  variant="standard"
                  placeholder="Email"
                  type="email"
                  onChange={(e) => handleInputChange(e, props)}
                />
              </Grid>

              <Grid
                item
                xs={6}
                className={`textfield_bold ${
                  filledFields.phone ? "hide_label" : ""
                }`}
              >
                <label className="input_label">
                  {filledFields.phone ? null : (
                    <span
                      className="asterisk"
                      style={{ color: "red", marginTop: "-3px" }}
                    >
                      *
                    </span>
                  )}
                  Phone
                </label>
                <Field
                sx={Styles.field_color}
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
                  onChange={(e) => handleInputChange(e, props)}
                />
              </Grid>

              <Grid
                item
                xs={6}
                className={`textfield_bold ${
                  filledFields.company ? "hide_label" : ""
                }`}
              >
                <label className="input_label">
                  {filledFields.company ? null : (
                    <span
                      className="asterisk"
                      style={{ color: "red", marginTop: "-3px" }}
                    >
                      *
                    </span>
                  )}
                  Company
                </label>
                <Field
                sx={Styles.field_color}
                  className="usersform_textfield"
                  component={Select}
                  name="company"
                  variant="standard"
                  onChange={(e) => handleInputChange(e, props)}
                >
                  {companyOptions.map((option, index) => (
                    <MenuItem key={option.value} value={option.value}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              "&.Mui-checked": {
                                color: "black",
                              },
                            }}
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
                className={`textfield_bold ${
                  filledFields.role ? "hide_label" : ""
                }`}
              >
                <label className="input_label">
                  {filledFields.role ? null : (
                    <span
                      className="asterisk"
                      style={{ color: "red", marginTop: "-3px" }}
                    >
                      *
                    </span>
                  )}
                  Role
                </label>
                <Field
                sx={Styles.field_color}
                  className="usersform_textfield"
                  component={Select}
                  name="role"
                  variant="standard"
                  onChange={(e) => handleInputChange(e, props)}
                >
                  {roleOptions.map((option, index) => (
                    <MenuItem key={option.value} value={option.value}>
                      <FormControlLabel
                        control={
                          <Checkbox
                          sx={{
                            "&.Mui-checked": {
                              color: "black",
                            },
                          }}
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

//Style
const Styles = {
  field_color: (theme) => ({
    '& label': {
      color: 'black',
    },
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&:hover fieldset': {
        borderColor: 'black',
        borderWidth: '0.15rem',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
  })
}