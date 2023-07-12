import React, { useState } from "react";
import { Grid, Button, MenuItem, Checkbox } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField, Select } from "formik-material-ui";
import * as Yup from "yup";
import "./adduser.scss";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.number("Phone must be a `number` type").required(
    "Phone is required"
  ),
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

const AddUserForm = () => {
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
          <Form noValidate autoComplete="off" className="adduser_form">
            <Grid container spacing={4} className="adduser_forminputs">
              <Grid
                item
                xs={12}
                md={6}
                className={`adduser-textfield_bold ${
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
                  component={TextField}
                  name="firstName"
                  variant="standard"
                  inputProps={{
                    className: "font-family-Exo",
                  }}
                  placeholder="First Name"
                  onChange={(e) => handleInputChange(e, props)}
                />
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                className={`adduser-textfield_bold ${
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
                  component={TextField}
                  name="lastName"
                  variant="standard"
                  inputProps={{
                    className: "font-family-Exo",
                  }}
                  placeholder="Last Name"
                  onChange={(e) => handleInputChange(e, props)}
                />
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                className={`adduser-textfield_bold ${
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
                  component={TextField}
                  name="email"
                  variant="standard"
                  inputProps={{
                    className: "font-family-Exo",
                  }}
                  placeholder="Email"
                  type="email"
                  onChange={(e) => handleInputChange(e, props)}
                />
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                className={`adduser-textfield_bold ${
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
                  component={TextField}
                  name="phone"
                  variant="standard"
                  placeholder="Phone"
                  type="number"
                  inputProps={{
                    className: "font-family-Exo",
                  }}
                  onChange={(e) => handleInputChange(e, props)}
                />
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                className={`adduser-textfield_bold ${
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
                  component={Select}
                  name="company"
                  variant="standard"
                  inputProps={{
                    className: "font-family-Exo",
                  }}
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
                className={`adduser-textfield_bold ${
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
                  component={Select}
                  name="role"
                  inputProps={{
                    className: "font-family-Exo",
                  }}
                  // renderValue={(selected) => {
                  //   console.log(selected);
                    // if (
                    //   // !selected &&
                    //   selected.length === 7 ||
                    //   selected.length === 5 
                    // ) {
                    //   return (
                    //     <span
                    //       style={{
                    //         color: "#C4C4CC",
                    //         fontFamily: "Exo 2",
                    //         marginLeft: "15px",
                    //       }}
                    //     >
                    //       Placeholder
                    //     </span>
                    //   );
                    // }
                    // else  {
                      
                    //   return selected;
                    // }
                  //   if (selected?.length === ""  ) {
                  //     return <em>Placeholder</em>;
                  //   }
        
                  //   else  {
                    
                  //       return selected;
                      
                  // }}}
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

export default AddUserForm;

//Style
const Styles = {
  field_color: (theme) => ({
    "& .MuiInput-underline:after": {
      borderBottomColor: "#2B2B33",
    },
    "& .Mui-error:after": {
      borderBottomColor: "#d32f2f",
    },
    "& .Mui-error:before": {
      borderBottomColor: "#d32f2f !important",
    },
    "& input": {
      paddingLeft: "15px",
      pb: "10px",
    },
    "& .MuiInputBase-root:hover": {
      backgroundColor: "#F0F0F2",
    },
    "& .MuiSelect-select:hover": {
      backgroundColor: "#F0F0F2",
    },

    "& :before": {
      borderBottom: "1.6px solid #C4C4CC !important",
    },
    // "&:before": {
    //   borderBottom: "1.6px solid #C4C4CC !important",
    // },
    "&:after": {
      borderColor: "#2B2B33",
    },
  }),
};
