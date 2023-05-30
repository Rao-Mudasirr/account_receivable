import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const Dashboard = ({checkboxData, onClickBtn}) => {

    return (
        <FormGroup>
            {checkboxData.map((item, index) => {
               
                return (

                    <FormControlLabel id={item.id}
                    key={index}
                        onClick={onClickBtn}
                        control={<Checkbox />}
                        label={item.label} />
                )
            })}
        </FormGroup>
    )
}

export default Dashboard