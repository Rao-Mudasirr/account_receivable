import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { withStyles } from '@material-ui/core';
const Dashboard = ({ checkboxData,}) => {

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
                <FormControlLabel
                    key={index}
                    control={<CustomCheckbox/>}
                    label={item.label}
                />
            ))}
        </FormGroup>
    )
}

export default Dashboard