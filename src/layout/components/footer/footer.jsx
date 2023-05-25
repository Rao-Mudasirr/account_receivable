import React from 'react';

import { Grid } from '@mui/material';

export const Footer = () => {
    return (
        <>
            <Grid component="footer" spacing={{ md: 2, xs: 1 }} sx={{ backgroundColor: '#FFFAFC', fontSize: { md: "14px", xs: "9px" }, pl: { md: '20px !important', xs: '0px' }, position: 'fixed', bottom: 0, pb: { md: '10px', xs: '0px' }, zIndex: '1400' }} justifyContent="space-between" container className="care-library-footer footer-primary-color">
                <Grid item md={4} xs={12} sx={{ textAlign: { md: "left", xs: "center" }, pt: '5px !important' }} className="copyright-div">
                    Copyrights © 2023 All rights reserved <span className='secondary-color'>ORCALO HOLDINGS</span>
                </Grid>
            </Grid>
        </>
    );
};
