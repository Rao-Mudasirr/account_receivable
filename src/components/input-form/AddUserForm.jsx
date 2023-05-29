import React from "react";
import { Grid, Button, MenuItem, Checkbox, FormControlLabel } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField, Select } from "formik-material-ui";
import * as Yup from "yup";
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
                    <Form noValidate autoComplete="off">
                        <Grid sx={{ gap: 5 }} className="adduser_form">
                            <Grid item xs={6}>
                                <Field
                                    className="usersform_textfield"
                                    component={TextField}
                                    name="firstName"
                                    label="First Name"
                                    variant="standard"
                                    placeholder="First Name"
                                    focused
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    className="usersform_textfield"
                                    component={TextField}
                                    name="lastName"
                                    label="Last Name"
                                    variant="standard"
                                    placeholder="Last Name"
                                    focused
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    className="usersform_textfield"
                                    component={TextField}
                                    name="email"
                                    label="Email"
                                    variant="standard"
                                    placeholder="Email"
                                    type="email"
                                    focused
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    className="usersform_textfield"
                                    component={TextField}
                                    name="phone"
                                    label="Phone"
                                    variant="standard"
                                    placeholder="Phone"
                                    type="number"
                                    focused
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    className="usersform_textfield"
                                    component={Select}
                                    name="company"
                                    variant="standard"
                                    label="Company"
                                    focused
                                >
                                    {companyOptions.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={option.value === values.company} />
                                                }
                                                label={option.label}
                                            />
                                        </MenuItem>
                                    ))}
                                </Field>
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    component={Select}
                                    name="role"
                                    variant="standard"
                                    label="Role"
                                    className="usersform_textfield"
                                    focused
                                >
                                    {roleOptions.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox checked={option.value === values.role} />
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
