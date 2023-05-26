import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const Dashboard = ({checkDisabled,checkboxData, onClickBtn}) => {
    // console.log(checkboxData,"checkboxData")
    return (
        <FormGroup>
            {checkboxData.map((item, index) => {
                console.log(checkboxData, "checkBoxData")
                return (

                    <FormControlLabel id={item.id}
                    key={index}
                        onClick={onClickBtn}
                        disabled={checkDisabled}
                        required control={<Checkbox />}
                        label={item.label} />
                )
            })}
        </FormGroup>
    )
}

export default Dashboard