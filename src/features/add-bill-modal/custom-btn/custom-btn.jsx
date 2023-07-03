import { Button } from '@mui/material'
import React from 'react'

export const CustomBtn = ({onClick,children,otherProps}) => {
    return (
        <>
            <Button
                variant="contained"
                className='font-family-Exo text-transform border-radius-8'
                color="primary"
                onClick={onClick}
                sx={{
                    background: "#2B2B33",
                    p: '10px 16px',
                    "&:hover": {
                        background: "#2B2B33",
                    },
                }}
                {...otherProps}
            >
                {children}
            </Button>
        </>
    )
}
