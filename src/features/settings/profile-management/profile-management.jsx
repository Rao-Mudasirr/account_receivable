import { Avatar, Button, Grid, Typography,Box } from '@mui/material'
import React from 'react'
import profile from '../../../assests/images/settings/profile-img.png'
import GlobalButton from '../../../components/global-button/global-button'
import editIcon from  '../../../assests/images/settings/editIcon.png';
import PersonalDetails from '../components/personal-details/personal-details';

const ProfileManagement = () => {
  return (
    <Grid container spacing={2} >
      <Grid xs={2} sx={{p:5}}>
   <Avatar src={profile} alt="profile-img" sx={{ width: '160px', height: '160px', }} />
    </Grid>
  
       <Grid xs={10} sx={{  mt:10 }}>
  <Box sx={{ display: 'flex', justifyContent: 'flex-end',  }}>
    <GlobalButton
      variant="accent"
      btnName="accent"
      btnText="Edit Profile"
      endIcon={<img src={editIcon} alt="Export Text" width={16} height={16} />}
    />
  </Box>

  <Box sx={{ml:5}}>
    <Typography variant="body1" className="font-family-exo2 primary-color sub-heading" >
      Nick John
    </Typography>
  </Box>

  <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: 'flex-end' }}>
    <Typography variant="body1" className="font-family-exo2 primary-title" sx={{ color: '#166088' }}>
      Change Email
    </Typography>
    <Typography variant="body1" className="font-family-exo2 primary-title" sx={{ color: '#166088' }}>
      Change Password
    </Typography>
  </Box>

</Grid>


      <Grid xs={8} >
      <PersonalDetails/>
      </Grid>
      <Grid xs={4}>

</Grid>
    </Grid>
  )
}

export default ProfileManagement 
