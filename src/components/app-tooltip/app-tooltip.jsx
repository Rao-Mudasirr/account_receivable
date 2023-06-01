import styled from '@emotion/styled';
import { Box, Tooltip, tooltipClasses } from '@mui/material';
import React from 'react'
const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip sx={{fontSize:'14px'}} placement="top" {...props} arrow classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: '#2B2B33',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#2B2B33',
  },
}));
export const AppTooltip = ({ children, message }) => {
  return (
    <>
      <BootstrapTooltip title={<Box sx={{fontSize:'14px'}}>{message}</Box>}>
        {children}
      </BootstrapTooltip>
    </>
  )
}
