import React from 'react'
import CardContent from '@mui/material/CardContent';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Typography from '@mui/material/Typography';
import { Box, TextField } from '@mui/material';
import GlobalButton from '../../../../../../components/global-button/global-button';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import ErrorIcon from '@mui/icons-material/Error';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
    rolename: Yup.string().required(<div style={{
        fontFamily: 'Exo 2',
        fontSize: '12px',
        display: 'flex',
        alignItems: 'end',
        position: 'absolute',
        color: 'rgba(255, 85, 85, 1)'
    }}>
        <ErrorIcon fontSize="small" sx={{ mr: 0.5, mb: 0.3, transform: 'rotate(180deg)' }} />
        Please Enter Role Name</div>),

    description: Yup.string().required(<div style={{
        fontFamily: 'Exo 2',
        fontSize: '12px',
        display: 'flex',
        alignItems: 'end',
        position: 'absolute',
        color: 'rgba(255, 85, 85, 1)'
    }}>
        <ErrorIcon fontSize="small" sx={{ mr: 0.5, mb: 0.3, transform: 'rotate(180deg)' }} />
        Please Enter Description</div>),
})

const AddRole = ({ closeAddRoleModal }) => {
    const initialValues = {
        rolename: '',
        description: '',
    };

    const handleSubmit = (values) => {
        // Handle form submission here
        console.log(values);
    };

    return (
        <>
            <div className="height-100vh flex justify-center align-center">
                <Box sx={{ width: '592px', height: '416px', borderRadius: '8px', backgroundColor: 'white', p: 2 }}>
                    <CardContent>
                        <Typography sx={{
                            fontSize: 20,
                            fontWeight: '600',
                            display: 'flex',
                            fontFamily:'Exo 2',
                            justifyContent: 'space-between'
                        }}
                            gutterBottom>
                            Add New Role
                            <CancelOutlinedIcon onClick={() => closeAddRoleModal()} />
                        </Typography>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={handleSubmit}
                            validationSchema={validationSchema}
                        >
                            {({ errors, touched }) => (
                                <Grid container>
                                    <Grid item xs={12} sx={{ height: '60px', mt: 6 }} >
                                        <div className="label">
                                            <label htmlFor="fullName"
                                                style={{ color: touched.rolename && errors.rolename ? "rgba(255, 85, 85, 1)" : "#4C4C4C" }}>
                                                <span
                                                    style={{ color: 'rgba(255, 85, 85, 1)', marginTop: '-5px' }}>*</span>
                                                Role Name</label>
                                        </div>
                                        <Field
                                            sx={styles.field__color}
                                            component={TextField}
                                            id="roleName"
                                            variant="standard"
                                            fullWidth
                                            type="text"
                                            placeholder="Enter Role Name"
                                            name="RoleName"
                                            position='absolute'
                                            InputProps={{
                                                style: {
                                                    fontSize: '14px',
                                                    paddingLeft: '20px'
                                                }
                                            }}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sx={{ height: '60px', mt: 6 }} >
                                        <div className="label">
                                            <label htmlFor="fullName"
                                                style={{ color: touched.description && errors.description ? "rgba(255, 85, 85, 1)" : "#4C4C4C" }}>
                                                <span
                                                    style={{ color: 'rgba(255, 85, 85, 1)', marginTop: '-5px' }}>*</span>
                                                Description</label>
                                        </div>
                                        <Field
                                            sx={styles.field__color}
                                            component={TextField}
                                            id="description"
                                            variant="standard"
                                            fullWidth
                                            type="text"
                                            placeholder="Enter Description"
                                            name="Description"
                                            position='absolute'
                                            InputProps={{
                                                style: {
                                                    fontSize: '14px',
                                                    paddingLeft: '20px'
                                                }
                                            }}
                                        />
                                    </Grid>
                                </Grid>


                            )}
                        </Formik>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            marginTop: 40,
                            gap: 10,
                            marginTop: '65px'
                        }}>
                            <Button variant="outlined" color="inherit"
                                onClick={() => closeAddRoleModal()}
                                sx={{
                                    color: 'black',
                                    borderColor: '#40404D',
                                    padding: '8px',
                                    border: '1.5px solid #40404D',
                                    fontWeight: 400,
                                    fontSize: '0.75rem',
                                    borderRadius: '8px',
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        borderColor: 'black',
                                        color: 'black',
                                    }
                                }}
                            >
                                Cancel</Button>
                            <GlobalButton
                                btnText='Add'
                                btnName='accent'
                            />
                        </div>

                    </CardContent>

                </Box >
            </div>
        </>
    );
}


export default AddRole

const styles = {
    field__color: () => ({
        '& label': {
            color: 'black',
        },
        '& label.Mui-focused': {
            color: 'black',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'black'
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