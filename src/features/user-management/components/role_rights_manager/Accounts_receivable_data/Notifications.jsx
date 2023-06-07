import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { withStyles } from '@material-ui/core';

const Notifications = ({checkboxData, onClickBtn}) => {

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
            {checkboxData.map((item, index) => {
                return (

                    <FormControlLabel id={item.id}
                    key={index}
                    onClick={onClickBtn}
                        control={<CustomCheckbox/>}
                        label={item.label} />
                )
            })}
        </FormGroup>                                     
    )
}

export default Notifications