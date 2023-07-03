import React, { useState } from "react";
import { Grid, Button, MenuItem, Checkbox } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField, Select } from "formik-material-ui";
import * as Yup from "yup";
import "./edituser.scss";

const validationSchema = Yup.object().shape({
  firstName: Yup.string(),
  lastName: Yup.string(),
  email: Yup.string().email("Invalid email"),
  phone: Yup.number("Phone must be a `number` type"),
  company: Yup.string(),
  role: Yup.string(),
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

const EditUserForm = () => {
  const [filledFields, setFilledFields] = useState({});

  const handleInputChange = (e, formik) => {
    const { name, value } = e.target;
    console.log(e.target);
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
          <Form noValidate autoComplete="off" className="edituser_form">
            <Grid container spacing={4}>
              <Grid
                item
                xs={12}
                md={6}
                className="edituser-textfield_bold"
              >
                <label className="input_label">
                  
                  First Name
                </label>
                <Field
                  sx={Styles.field_color}
                  component={TextField}
                  name="firstName"
                  variant="standard"
                  placeholder="First Name"
                  onChange={(e) => handleInputChange(e, props)}
                />
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                className="edituser-textfield_bold"
              >
                <label className="input_label">
                  
                  Last Name
                </label>
                <Field
                  sx={Styles.field_color}
                  component={TextField}
                  name="lastName"
                  variant="standard"
                  placeholder="Last Name"
                  onChange={(e) => handleInputChange(e, props)}
                />
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                className="edituser-textfield_bold"
              >
                <label className="input_label">
                  
                  Email
                </label>
                <Field
                  sx={Styles.field_color}
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
                xs={12}
                md={6}
                className="edituser-textfield_bold"
              >
                <label className="input_label">
                  
                  Phone
                </label>
                <Field
                  sx={Styles.field_color}
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
                xs={12}
                md={6}
                className="edituser-textfield_bold"
              >
                <label className="input_label">
                  
                  Company
                </label>
                <Field
                  sx={Styles.field_color}
                  component={Select}
                  name="company"
                  variant="standard"
                  onChange={(e) => handleInputChange(e, props)}
                >
                  {companyOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      <Checkbox
                        sx={{
                          "&.Mui-checked": {
                            color: "black",
                          },
                        }}
                        className="checkbox-hidden"
                        checked={option.value === values.company}
                        color="primary"
                      />
                      <span className="checkbox-label">{option.label}</span>
                    </MenuItem>
                  ))}
                </Field>
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                className="edituser-textfield_bold"
              >
                <label className="input_label">
                  
                  Role
                </label>
                <Field
                  sx={Styles.field_color}
                  component={Select}
                  name="role"
                  variant="standard"
                  onChange={(e) => handleInputChange(e, props)}
                >
                  {roleOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      <Checkbox
                        sx={{
                          "&.Mui-checked": {
                            color: "black",
                          },
                        }}
                        className="checkbox-hidden"
                        checked={option.value === values.role}
                        color="primary"
                      />
                      <span className="checkbox-label">{option.label}</span>
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

export default EditUserForm;

//Style
const Styles = {
  field_color: (theme) => ({
    "& label": {
      color: "black",
    },
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
        borderColor: "black",
        borderWidth: "0.15rem",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
    "&:after": {
      borderColor: "black",
    },
  }),
};
