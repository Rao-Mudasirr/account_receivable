import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Typography from '@mui/material/Typography';
import { Box, TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const UpdateRole = (props) => {
  const { handleCloseFormModal } = props;

  return (
    <div className="card_style">
      <Box sx={{ width: '592px', height: '416px', border:'8px' }}>
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: '600',
            display: 'flex',
            justifyContent: 'space-between',
          }}
          gutterBottom
        >
          Update Role
          <CancelOutlinedIcon onClick={() => handleCloseFormModal(false)} />
        </Typography>
        <CardContent>
          <Typography
            sx={{
              color: '#6B6B80',
              mt: 5,
              fontSize: 16,
              fontWeight: '400',
            }}
          >
            Role Name
          </Typography>
          <TextField
            className="fields"
            sx={{
              m: 1,
              width: '100%',
              maxWidth: '63ch',
              borderBottomColor: '#C4C4CC',
            }}
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
            Description
          </Typography>
          <TextField
            sx={{
              m: 1,
              width: '100%',
              maxWidth: '63ch',
              borderBottomColor: '#C4C4CC',
            }}
            id="standard-basic"
            variant="standard"
          />
        </CardContent>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 40,
            gap: 10,
          }}
        >
          <Button variant="outlined" color="inherit" onClick={() => handleCloseFormModal(false)}>
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              background: '#2B2B33',
              color: 'white',
              '&:hover': {
                background: 'black',
                color: 'white',
                border: '1px solid black',
              },
            }}
          >
            Update
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default UpdateRole;
