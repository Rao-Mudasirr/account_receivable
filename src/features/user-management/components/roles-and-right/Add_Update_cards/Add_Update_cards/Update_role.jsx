import React from 'react';
import CardContent from '@mui/material/CardContent';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Typography from '@mui/material/Typography';
import { Box, TextField, Grid } from '@mui/material';
import { Button } from '@mui/material';


const UpdateRole = (props) => {
  const { handleCloseFormModal } = props;

  return (
    <Grid container>
      <Box sx={{ width: '600px', p: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: '20px', fontWeight: '600', fontFamily: 'Exo 2' }}>
            Update Role
          </Typography>
          <HighlightOffIcon color="action" onClick={() => handleCloseFormModal(false)} sx={{ fontSize: '27px' }} />
        </div>

        <CardContent>
          <Grid item xs={12} sx={{ height: '75px' }}>
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
              fullWidth
              id="standard-basic"
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} sx={{ height: '75px' }}>
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
            className="fields"
            fullWidth
            id="standard-basic"
            variant="standard"
          />
          </Grid>
        </CardContent>


        <Grid item xs={12} sx={{display:'flex', justifyContent:'flex-end', mt:'40px', gap:'10px'}}>
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
        </Grid>
      </Box>
    </Grid>
  );
};

export default UpdateRole;
