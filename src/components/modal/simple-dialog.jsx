import { Box, Dialog } from '@mui/material'
import React from 'react'

export const SimpleDialog = ({ open, handleClose, children, title, titleClass="font-weight-600 heading-20 primary-color", titleSX,paperSx }) => {
    return (
        <>
            <Dialog onClose={handleClose}  PaperProps={{sx:paperSx}}  open={open}>
                <Box sx={{ p: '20px' }}>
                    <div className='flex justify-between margin-bottom-1'>
                        <Box className={titleClass} sx={titleSX}>
                            {title}
                        </Box>
                        <Box className="cursor-pointer" sx={{position:'absolute',right:'8px',top:'10px'}} onClick={handleClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#40404D" />
                                <path d="M9.17011 15.5794C8.98011 15.5794 8.79011 15.5094 8.64011 15.3594C8.35011 15.0694 8.35011 14.5894 8.64011 14.2994L14.3001 8.63938C14.5901 8.34938 15.0701 8.34938 15.3601 8.63938C15.6501 8.92937 15.6501 9.40937 15.3601 9.69937L9.70011 15.3594C9.56011 15.5094 9.36011 15.5794 9.17011 15.5794Z" fill="#40404D" />
                                <path d="M14.8301 15.5794C14.6401 15.5794 14.4501 15.5094 14.3001 15.3594L8.64011 9.69937C8.35011 9.40937 8.35011 8.92937 8.64011 8.63938C8.93011 8.34938 9.41011 8.34938 9.70011 8.63938L15.3601 14.2994C15.6501 14.5894 15.6501 15.0694 15.3601 15.3594C15.2101 15.5094 15.0201 15.5794 14.8301 15.5794Z" fill="#40404D" />
                            </svg>
                        </Box>
                    </div>
                    {children}
                </Box>
            </Dialog>
        </>
    )
}
