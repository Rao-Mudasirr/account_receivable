import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Select } from "@mui/material";
import { TextField } from "formik-material-ui";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import ErrorIcon from "@mui/icons-material/Error";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import "./signUp.scss";

const names = [
  "Account Payable (I want to pay vendors)",
  "Account Receivable (I want to send invoices)",
  "Cash Flow (I want to manage cash)",
  "All",
];

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required(
    <div
      style={{
        fontFamily: "Exo 2",
        fontSize: "12px",
        display: "flex",
        alignItems: "end",
        position: "absolute",
        color: "rgba(255, 85, 85, 1)",
      }}
    >
      <ErrorIcon
        fontSize="small"
        sx={{ mr: 0.5, mb: 0.3, transform: "rotate(180deg)" }}
      />
      Please Enter Full Name(First and Last Name)
    </div>
  ),
  email: Yup.string()
    .email(
      <div
        style={{
          fontFamily: "Exo 2",
          fontSize: "12px",
          display: "flex",
          alignItems: "end",
          position: "absolute",
          color: "rgba(255, 85, 85, 1)",
        }}
      >
        <ErrorIcon
          fontSize="small"
          sx={{ mr: 0.5, mb: 0.3, transform: "rotate(180deg)" }}
        />
        Please Enter a Valid email Address
      </div>
    )
    .required(
      <div
        style={{
          fontFamily: "Exo 2",
          fontSize: "12px",
          display: "flex",
          alignItems: "end",
          position: "absolute",
          color: "rgba(255, 85, 85, 1)",
        }}
      >
        <ErrorIcon
          fontSize="small"
          sx={{ mr: 0.5, mb: 0.3, transform: "rotate(180deg)" }}
        />
        Please Enter a Valid email Address
      </div>
    ),
  password: Yup.string().min(6, true).required(true),
  checkbox: Yup.array()
    .min(2, "Please choose at least one option")
    .required("Please select an option"),
});

const labelstyles = (theme) => ({
  root: {
    "& .MuiFormControlLabel-label": {
      fontSize: "14px",
      fontWeight: "400",
      fontFamily: "Exo 2",
      color: "#4C4C4C",
    },
  },
});

const ListItemTextStyle = withStyles(labelstyles)(ListItemText);

const menuStyles = (theme) => ({
  root: {
    "&.Mui-selected": {
      backgroundColor: "transparent",
    },
    "&.Mui-selected:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-selected:focus": {
      backgroundColor: "transparent",
    },
    "&.MuiSelect-outline": {
      outline: "none",
      border: "10px solid green",
    },
    "&.MuiInput-input": {
      color: "red",
      border: "10px solid green",
    },
  },
});

const StyledMenuItem = withStyles(menuStyles)(MenuItem);

const checkBoxStyles = (theme) => ({
  root: {
    "&$checked": {
      color: "black",
    },
  },
  checked: {},
});

const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  checkbox: [""],
};

export default function MySignUpForm(props) {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [filledFields, setFilledFields] = useState({});

  const handleInputChange = (e, formik) => {
    const { name, value } = e.target;
    formik.setFieldValue(name, value);
    setFilledFields((prevFilledFields) => ({
      ...prevFilledFields,
      [name]: value.trim() !== "",
    }));
  };

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
    setFilledFields({});
    navigate("/sign-up-2");
  };

  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    if (value.includes("All")) {
      setPersonName(names.filter((name) => name !== "All"));
    } else {
      setPersonName(value);
    }
  };

  let isAllSelected = personName.length === names.length - 1;

  return (
    <Grid
      container
      className="height-100vh align-center justify-center signup_container"
    >
      <Box
        sx={{
          width: 600,
          borderRadius: "16px",
          p: "25px",
          border: "1px solid rgba(204, 204, 204, 0.5)",
          filter: "dropShadow(0px 0px 4px rgba(204, 204, 204, 0.1))",
          borderRadius: "16px",
        }}
      >
        <div className="sign_heading">
          <span style={{ color: "#4C4C4C", marginRight: "10px" }}>
            Welcome to
          </span>
          Accountants Pact!
        </div>
        <div className="text-mute">Let's Get Started</div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {(props) => {
            const { values, errors, touched, setFieldValue } = props;

            return (
              <Form>
                <Grid container spacing={7}>
                  <Grid
                    item
                    xs={12}
                    className={`textfield_bold ${
                      filledFields.fullName ? "hide_label" : ""
                    }`}
                    sx={{ height: "75px" }}
                  >
                    <label
                      className={`signup_label ${
                        touched.fullName && errors.fullName ? "error_label" : ""
                      }`}
                    >
                      {filledFields.fullName ? null : (
                        <span
                          className="asterisk"
                          style={{
                            color: "rgba(255, 85, 85, 1)",
                            marginTop: "-5px",
                          }}
                        >
                          *
                        </span>
                      )}
                      Full Name
                    </label>
                    <Field
                      className="signinform_textfield"
                      component={TextField}
                      name="fullName"
                      variant="standard"
                      placeholder="Enter Full Name"
                      type="text"
                      fullWidth
                      onChange={(e) => handleInputChange(e, props)}
                      InputProps={styles.font_family()}
                      sx={styles.field__color}
                    />
                  </Grid>

                  <Grid item xs={12} sx={{ height: "75px", mt: "2rem" }}>
                    <div>
                      <div className="signup_label">
                        <label
                          htmlFor="email"
                          style={{
                            color:
                              touched.email && errors.email
                                ? "rgba(255, 85, 85, 1)"
                                : "#4C4C4C",
                          }}
                        >
                          <span
                            style={{
                              color: "rgba(255, 85, 85, 1)",
                              marginTop: "-5px",
                            }}
                          >
                            *
                          </span>
                          Business Email
                        </label>
                      </div>
                      <Field
                        sx={styles.field__color}
                        component={TextField}
                        id="email"
                        variant="standard"
                        fullWidth
                        placeholder="Enter Email"
                        type="email"
                        name="email"
                        InputProps={{
                          style: {
                            fontSize: "14px",
                            paddingLeft: "20px",
                          },
                        }}
                      />
                    </div>
                  </Grid>

                  <Grid item xs={12} sx={{ height: "75px", mt: "2rem" }}>
                    <div>
                      <div className="signup_label">
                        <label
                          htmlFor="password"
                          style={{
                            color:
                              touched.password && errors.password
                                ? "rgba(255, 85, 85, 1)"
                                : "#4C4C4C",
                          }}
                        >
                          <span
                            style={{
                              color: "rgba(255, 85, 85, 1)",
                              marginTop: "-5px",
                            }}
                          >
                            *
                          </span>
                          Create Password
                        </label>
                      </div>
                      <Field
                        sx={styles.field__color}
                        component={TextField}
                        id="password"
                        variant="standard"
                        fullWidth
                        placeholder="Enter Password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        InputProps={{
                          style: {
                            fontSize: "14px",
                            paddingLeft: "20px",
                          },
                          endAdornment: (
                            <InputAdornment>
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                sx={{
                                  margin: 0.7,
                                  pb: 2,
                                  transform: "scaleX(-1)",
                                }}
                              >
                                {showPassword ? (
                                  <RiEyeOffLine />
                                ) : (
                                  <RiEyeLine />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                      <span className="password__text">
                        The password must be at least 6 characters
                      </span>
                    </div>
                  </Grid>

                  <Grid item xs={12} sx={{ height: "75px", mt: "2.5rem" }}>
                    <Form>
                      <Box>
                        <div className="signup_label">
                          <label
                            htmlFor="checkbox"
                            style={{
                              color:
                                touched.checkbox && errors.checkbox
                                  ? "rgba(255, 85, 85, 1)"
                                  : "#4C4C4C",
                            }}
                          >
                            <span
                              style={{
                                color: "rgba(255, 85, 85, 1)",
                                marginTop: "-5px",
                              }}
                            >
                              *
                            </span>
                            Why are you signing up for Accountant Pact?
                          </label>
                        </div>
                        <Field
                          sx={styles.field__color}
                          component={Select}
                          placeholder="Select"
                          fullWidth
                          variant="standard"
                          labelId="demo-multiple-checkbox-label"
                          id="demo-multiple-checkbox"
                          multiple
                          name="checkbox"
                          InputProps={{
                            style: {
                              fontSize: "14px",
                              paddingLeft: "20px",
                            },
                          }}
                          value={values.checkbox}
                          renderValue={(selected) => {
                            if (selected.includes("All")) {
                              return "All";
                            }
                            return selected.join(", ");
                          }}
                        >
                          {names.map((name) => (
                            <StyledMenuItem
                              onClick={() => {
                                name === "All"
                                  ? values.checkbox.includes(name)
                                    ? setFieldValue("checkbox", [])
                                    : setFieldValue("checkbox", names)
                                  : values.checkbox.includes(name)
                                  ? setFieldValue(
                                      "checkbox",
                                      values.checkbox.filter(
                                        (item) => item !== name
                                      )
                                    )
                                  : setFieldValue("checkbox", [
                                      ...values.checkbox,
                                      name,
                                    ]);
                                console.log(values.checkbox);
                              }}
                              key={name}
                              value={name}
                            >
                              <CustomCheckbox
                                checked={values.checkbox.includes(name)}
                              />
                              <ListItemTextStyle primary={name} />
                            </StyledMenuItem>
                          ))}
                        </Field>
                      </Box>
                    </Form>
                    {touched.checkbox && errors.checkbox && (
                      <div
                        style={{
                          color:
                            touched.checkbox && errors.checkbox
                              ? "rgba(255, 85, 85, 1)"
                              : "black",
                          fontFamily: "Exo 2",
                          fontSize: "12px",
                          fontWeight: "600",
                          display: "flex",
                          alignItems: "end",
                          position: "absolute",
                          color: "rgba(255, 85, 85, 1)",
                        }}
                      >
                        <ErrorIcon
                          fontSize="small"
                          sx={{
                            mr: 0.5,
                            mt: "2px",
                            transform: "rotate(180deg)",
                          }}
                        />
                        <span style={{ marginBottom: "3px" }}>
                          {" "}
                          Please Select an Option
                        </span>
                      </div>
                    )}
                  </Grid>
                  <Grid item xs={12} sx={{ mt: "40px" }}>
                    {/* <Link to="/sign-up-2"> */}
                    <Button
                      variant="contained"
                      size="large"
                      fullWidth
                      type="submit"
                      sx={{
                        borderRadius: "8px",
                        mt: 1,
                        background: "#2B2B33",
                        color: "white",
                        "&:hover": {
                          background: "black",
                          color: "white",
                          border: "1px solid black",
                        },
                      }}
                    >
                      Continue
                    </Button>
                    {/* </Link> */}
                  </Grid>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </Grid>
  );
}

//style

const styles = {
  field__color: () => ({
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
    "& :before": {
      borderBottom: "1.6px solid #C4C4CC !important",
    },
    "&:before": {
      borderColor: "black",
    },
    "&:after": {
      borderColor: "black",
    },
    "& .MuiInputBase-root:hover": {
      backgroundColor: "#F0F0F2",
    },
  }),
  font_family: () => ({
    className: "font-family-Exo",
    fontSize: "14px",
    paddingLeft: "20px",
  }),
};
