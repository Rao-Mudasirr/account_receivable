import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const Dashboard = ({ checkboxData, onClickBtn, switchEnabled,setSwitchOption,switchOption }) => {

    return (
        <FormGroup>
            {checkboxData.map((item, index) => (
                <FormControlLabel
                    key={index}
                    control={<Checkbox disabled={!switchEnabled} />}
                    label={item.label}
                    onClick={() => setSwitchOption(item.id)}
                    className={`text ${switchOption === item.id ? 'active' : ''}`}
                />
            ))}
        </FormGroup>
    )
}

export default Dashboard