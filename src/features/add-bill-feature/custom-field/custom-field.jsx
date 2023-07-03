import { Box, TextField } from '@mui/material'
import React from 'react'

export const CustomField = () => {
  return (
    <>
      <Box className="flex flex-column custom-field-for-ap">
        <label className='secondary-color' >
          Invoice Number
        </label>
        <TextField
            id="standard-basic"
            className="font-family-Exo"
            placeholder="Standard"
          />
      </Box>
    </>
  )
}
