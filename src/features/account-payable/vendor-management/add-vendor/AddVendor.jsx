import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Button, MenuItem, Checkbox, Typography, Box } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField, Select } from "formik-material-ui";
import * as Yup from "yup";
import AddIcon from '@mui/icons-material/Add';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./addvendor.scss";

const validationSchema = Yup.object().shape({
    vendorName: Yup.string().required("Vendor Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.number("Phone must be a `number` type"),
    website: Yup.string(),
    postCode: Yup.string().required("Post Code is required"),
    city: Yup.string(),
    address: Yup.string(),
    benificiaryName: Yup.string().required("Benificiary Name is required"),
    accountNumber: Yup.number().required("Account Number is required"),
    sortCode: Yup.string().required("Sort Code is required"),
    iban: Yup.string(),
});

const initialValues = {
    vendorName: "",
    email: "",
    phone: "",
    website: "",
    postCode: "",
    city: "",
    address: "",
    benificiaryName: "",
    accountNumber: "",
    sortCode: "",
    iban: ""
};


const AddVendor = () => {
    const [filledFields, setFilledFields] = useState({});
    const navigate = useNavigate();

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
        navigate((-1), toast.success("Vendor Added Successfully"));
      };

    const goBack = () => {
        window.history.back();
    };

    return (
        <Grid className="add-vendor_container">
            <Typography className="font-weight-600 heading-20 margin-top-1 font-family-exo2">
                Add Vendor
            </Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {(props) => {
                    const { values, resetForm } = props;

                    return (

                        <Form noValidate autoComplete="off" className="add-vendor_form margin-top-3">
                            <Typography className="font-weight-600 sub-heading margin-bottom-1 font-family-exo2">
                                Personal Details
                            </Typography>
                            <Grid>
                                <Grid container spacing={4}>
                                    <Grid
                                        item
                                        xs={12}
                                        md={5}
                                        className={`add-vendor-textfield_bold ${filledFields.vendorName ? "hide_label" : ""
                                            }`}
                                    >
                                        <label className="input_label">
                                            {filledFields.vendorName ? null : (
                                                <span
                                                    className="asterisk"
                                                    style={{ color: "red", marginTop: "-3px" }}
                                                >
                                                    *
                                                </span>
                                            )}
                                            Vendor Name
                                        </label>
                                        <Field
                                            sx={Styles.field_color}
                                            className="usersform_textfield"
                                            component={TextField}
                                            name="vendorName"
                                            variant="standard"
                                            placeholder="Vendor Name"
                                            onChange={(e) => handleInputChange(e, props)}
                                        />
                                    </Grid>

                                    <Grid
                                        item
                                        xs={12}
                                        md={5}
                                        className={`add-vendor-textfield_bold ${filledFields.email ? "hide_label" : ""
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
                                            Email Address
                                        </label>
                                        <Field
                                            sx={Styles.field_color}
                                            className="usersform_textfield"
                                            component={TextField}
                                            name="email"
                                            variant="standard"
                                            placeholder="Email Address"
                                            type="email"
                                            onChange={(e) => handleInputChange(e, props)}
                                        />
                                    </Grid>

                                    <Grid
                                        item
                                        xs={12}
                                        md={5}
                                        className="add-vendor-textfield_bold"
                                    >
                                        <label className="input_label">
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
                                        xs={12}
                                        md={5}
                                        className="add-vendor-textfield_bold"
                                    >
                                        <label className="input_label">
                                            Website
                                        </label>
                                        <Field
                                            sx={Styles.field_color}
                                            component={TextField}
                                            name="website"
                                            variant="standard"
                                            placeholder="Website"
                                            onChange={(e) => handleInputChange(e, props)}
                                        />
                                    </Grid>

                                    <Grid
                                        item
                                        xs={12}
                                        md={5}
                                        className={`add-vendor-textfield_bold ${filledFields.postCode ? "hide_label" : ""
                                            }`}
                                    >
                                        <label className="input_label">
                                            {filledFields.postCode ? null : (
                                                <span
                                                    className="asterisk"
                                                    style={{ color: "red", marginTop: "-3px" }}
                                                >
                                                    *
                                                </span>
                                            )}
                                            Post Code
                                        </label>
                                        <Field
                                            sx={Styles.field_color}
                                            className="usersform_textfield"
                                            component={TextField}
                                            name="postCode"
                                            variant="standard"
                                            placeholder="Post Code"
                                            onChange={(e) => handleInputChange(e, props)}
                                        />
                                    </Grid>

                                    <Grid
                                        item
                                        xs={12}
                                        md={5}
                                        className="add-vendor-textfield_bold"
                                    >
                                        <label className="input_label">
                                            City
                                        </label>
                                        <Field
                                            sx={Styles.field_color}
                                            component={TextField}
                                            name="city"
                                            variant="standard"
                                            placeholder="City"
                                            onChange={(e) => handleInputChange(e, props)}
                                        />
                                    </Grid>

                                    <Grid
                                        item
                                        xs={12}
                                        md={5}
                                        className="add-vendor-textfield_bold"
                                    >
                                        <label className="input_label">
                                            Address
                                        </label>
                                        <Field
                                            sx={Styles.field_color}
                                            component={TextField}
                                            name="address"
                                            variant="standard"
                                            placeholder="Address"
                                            onChange={(e) => handleInputChange(e, props)}
                                        />
                                    </Grid>
                                </Grid>
                                <Typography className="font-weight-600 sub-heading margin-bottom-1 margin-top-3 font-family-exo2">
                                    Bank Details
                                </Typography>
                                <Grid container spacing={4}>
                                    <Grid
                                        item
                                        xs={12}
                                        md={5}
                                        className={`add-vendor-textfield_bold ${filledFields.benificiaryName ? "hide_label" : ""
                                            }`}
                                    >
                                        <label className="input_label">
                                            {filledFields.benificiaryName ? null : (
                                                <span
                                                    className="asterisk"
                                                    style={{ color: "red", marginTop: "-3px" }}
                                                >
                                                    *
                                                </span>
                                            )}
                                            Benificiary Name
                                        </label>
                                        <Field
                                            sx={Styles.field_color}
                                            className="usersform_textfield"
                                            component={TextField}
                                            name="benificiaryName"
                                            variant="standard"
                                            placeholder="Benificiary Name"
                                            onChange={(e) => handleInputChange(e, props)}
                                        />
                                    </Grid>

                                    <Grid
                                        item
                                        xs={12}
                                        md={5}
                                        className={`add-vendor-textfield_bold ${filledFields.accountNumber ? "hide_label" : ""
                                            }`}
                                    >
                                        <label className="input_label">
                                            {filledFields.accountNumber ? null : (
                                                <span
                                                    className="asterisk"
                                                    style={{ color: "red", marginTop: "-3px" }}
                                                >
                                                    *
                                                </span>
                                            )}
                                            Account Number
                                        </label>
                                        <Field
                                            sx={Styles.field_color}
                                            className="usersform_textfield"
                                            component={TextField}
                                            name="accountNumber"
                                            variant="standard"
                                            placeholder="Account Number"
                                            onChange={(e) => handleInputChange(e, props)}
                                        />
                                    </Grid>

                                    <Grid
                                        item
                                        xs={12}
                                        md={5}
                                        className={`add-vendor-textfield_bold ${filledFields.sortCode ? "hide_label" : ""
                                            }`}
                                    >
                                        <label className="input_label">
                                            {filledFields.sortCode ? null : (
                                                <span
                                                    className="asterisk"
                                                    style={{ color: "red", marginTop: "-3px" }}
                                                >
                                                    *
                                                </span>
                                            )}
                                            Sort Code
                                        </label>
                                        <Field
                                            sx={Styles.field_color}
                                            className="usersform_textfield"
                                            component={TextField}
                                            name="sortCode"
                                            variant="standard"
                                            placeholder="Sort Code"
                                            onChange={(e) => handleInputChange(e, props)}
                                        />
                                    </Grid>

                                    <Grid
                                        item
                                        xs={12}
                                        md={5}
                                        className="add-vendor-textfield_bold"
                                    >
                                        <label className="input_label">
                                            IBAN
                                        </label>
                                        <Field
                                            sx={Styles.field_color}
                                            component={TextField}
                                            name="iban"
                                            variant="standard"
                                            placeholder="IBAN"
                                            onChange={(e) => handleInputChange(e, props)}
                                        />
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid container className="vendor-add_btn" lg={9.5} md={9.5}>
                                <Button variant="outlined" onClick={goBack}>
                                    Cancel
                                </Button>
                                <Button type="submit" sx={{
                                    background: '#2B2B33',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    borderRadius: '8px',
                                    gap: '10px',
                                    px: "16px",
                                    py: "10px",
                                    color: "#fff",
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        background: '#2B2B33',
                                    }
                                }}
                                    endIcon={<AddIcon fontSize="medium" sx={{ color: 'white' }} />}
                                >
                                    Add Vendor
                                </Button>
                            </Grid>
                        </Form>
                    );
                }}
            </Formik>
        </Grid>
    );
};

export default AddVendor;

//Style
const Styles = {
    field_color: (theme) => ({
        "& label": {
            color: "#2B2B33",
        },
        "& label.Mui-focused": {
            color: "#2B2B33",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#2B2B33",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#2B2B33",
            },
            "&:hover fieldset": {
                borderColor: "#2B2B33",
                borderWidth: "0.15rem",
            },
            "&.Mui-focused fieldset": {
                borderColor: "#2B2B33",
            },
        },
        "&:after": {
            borderColor: "#2B2B33",
        },
    }),
};
