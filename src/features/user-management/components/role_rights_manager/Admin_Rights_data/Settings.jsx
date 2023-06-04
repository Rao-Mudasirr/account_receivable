import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const Settings = ({ checkboxData2, switchEnabled }) => {

    return (
        <FormGroup>
            {checkboxData2.map((item, index) => (
                <FormControlLabel
                    key={index}
                    control={<Checkbox disabled={!switchEnabled} />}
                    label={item.label}
                />
            ))}
        </FormGroup>
    )
}

export default Settings