import { Button } from '@mui/material'
import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SetDefaultBtn = () => {
    const showToast = () => {
        toast.success(<span className='secondary-title font-weight-400 font-family-exo2'>
            Nord Bank has been set as default for transactions</span>);
    };
    return (
        <>
            <Button variant='outlined' sx={{
                color: 'black',
                borderColor: '#40404D',
                px: '15',
                py: '10',
                border: '2px solid #40404D',
                fontWeight: 400,
                fontSize: '12px',
                borderRadius: '8px',
                textTransform: 'capitalize',
                '&:hover': {
                    borderColor: 'black',
                    border: '2px solid black',
                    color:'black'
                },
            }}
                onClick={showToast}
            >
                Set as Default
            </Button>
        </>
    )
}

export default SetDefaultBtn