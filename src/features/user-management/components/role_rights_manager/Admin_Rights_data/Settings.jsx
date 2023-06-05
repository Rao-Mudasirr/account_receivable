import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const Settings = (checkboxData2, switchOption, setSwitchOption) => {
    const data = checkboxData2.checkboxData2
    console.log(checkboxData2.checkboxData2)
    return (
        <FormGroup>
            {data.map((item, index) => {
                return (
                    <FormControlLabel
                        key={index}
                        control={<Checkbox />}
                        onClick={() => setSwitchOption(item.id)}
                        className={`text ${switchOption === item.id ? 'active' : ''}`}
                        label={item.label}
                    />
                )
            })}
        </FormGroup>
    )
}

export default Settings