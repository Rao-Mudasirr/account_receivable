import React, { useState } from 'react';
import CardContent from '@mui/material/CardContent';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Typography from '@mui/material/Typography';
import { Box, TextField, Grid } from '@mui/material';
import { Button } from '@mui/material';
import './decline.scss';

const DeclineCard = (props) => {
  const { handleCloseFormModal } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [isTextFieldHovered, setIsTextFieldHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsTextFieldHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsTextFieldHovered(false);
  };

  return (
    <Grid container className="height-100vh justify-center align-center">
      <Box
        sx={{
          width: '592px',
          borderRadius: '8px',
          p: 2.3,
          boxShadow: 'rgba(0, 0, 0, 0.25) 0px 5px 15px;',
        }}
      >
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: '600',
            fontFamily: 'Exo 2',
            display: 'flex',
            justifyContent: 'space-between',
          }}
          gutterBottom
        >
          Declining Bill
          <CancelOutlinedIcon onClick={() => handleCloseFormModal(false)} />
        </Typography>
        <Grid item className="decline_card margin-top-3">
          <label
            className={`label_decline ${isTextFieldHovered ? 'label_hovered' : ''}`}
          >
            Please provide a reason for declining this bill
          </label>
          <TextField
            className={`fields ${isHovered ? 'hoverableTextField' : ''}`}
            fullWidth
            id="standard-basic"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            placeholder="Type Here"
            inputProps={{
              style: {
                height: '100px',
              },
            }}
            InputProps={{
              disableUnderline: false,
              style: { textAlign: 'start' },
            }}
            multiline
          />
        </Grid>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 40,
            gap: 10,
          }}
        >
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => handleCloseFormModal(false)}
            sx={{
              background: '#2B2B33',
              color: '#ffff',
              fontWeight: 400,
              fontSize: '16px',
              borderRadius: '8px',
              px: '20px',
              py: '10px',
              textTransform: 'capitalize',
              '&:hover': {
                background: '#2B2B33',
              },
            }}
          >
            Decline
          </Button>
        </div>
      </Box>
    </Grid>
  );
};

export default DeclineCard;



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
