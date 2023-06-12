import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Typography from '@mui/material/Typography';
import { Box, TextField } from '@mui/material';
import { Button } from '@mui/material';


const Add_role = ({closeAddRoleModal}) => {

    return (
        <Box>
            <CardContent>
                <Typography sx={{
                    fontSize: 20,
                    fontWeight: '600',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
                    gutterBottom>
                    Add New Role
                    <CancelOutlinedIcon onClick={() => closeAddRoleModal()} />
                </Typography>
                <Typography
                    sx={{
                        color: '#6B6B80',
                        mt: 5,
                        fontSize: 16,
                        fontWeight: '400',
                    }}
                >
                    <span style={{ color: 'red' }}>*</span>
                    Role Name
                </Typography>
                <TextField sx={{ m: 1, width: '63ch', borderBottomColor: '#C4C4CC' }}
                    id="standard-basic"
                    variant="standard"
                />
                <Typography
                    sx={{
                        color: '#6B6B80',
                        mt: 5,
                        fontSize: 16,
                        fontWeight: '400',
                    }}
                >
                    <span style={{ color: 'red' }}>*</span>
                    Description
                </Typography>
                <TextField sx={{ m: 1, width: '63ch', borderBottomColor: '#C4C4CC' }}
                    id="standard-basic"
                    variant="standard"
                />
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop: 40,
                    gap: 10
                }}>
                    <Button variant="outlined" color="inherit" onClick={() => closeAddRoleModal()}>
                        Cancel</Button>
                    <Button sx={{
                        background: "black",
                        color: "white",
                        "&:hover": {
                            background: 'white',
                            color: "inherit",
                            border: '1px solid black'
                        }
                    }}>Add</Button>
                </div>

            </CardContent>

        </Box >
    );
}


export default Add_role