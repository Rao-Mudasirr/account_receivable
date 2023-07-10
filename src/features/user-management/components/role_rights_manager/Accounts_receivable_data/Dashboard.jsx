import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { withStyles } from '@material-ui/core';
const Dashboard = ({ checkboxData,handleSwitchChange}) => {
  console.log(handleSwitchChange,'Clicked')

    const labelstyles = theme => ({
        root: {
          '& .MuiFormControlLabel-label': {
            fontSize: '14px',
            fontFamily: 'Exo 2',
          },
        },
      });
      
      const LabelStyle = withStyles(labelstyles)(FormControlLabel);

    const checkBoxStyles = theme => ({
        root: {
          '&$checked': {
            color: 'black',
          },
        },
        checked: {},
       })
    
    const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);

    return (
        <FormGroup>
            {checkboxData.map((item, index) => (
                <LabelStyle
                    key={index}
                    control={<CustomCheckbox onClick={()=> handleSwitchChange}/>}
                    label={item.label}
                />
            ))}
        </FormGroup>
    )
}

export default Dashboard