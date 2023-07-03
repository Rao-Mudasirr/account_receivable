import { Grid ,Box,Button, Typography,Pagination, styled} from '@mui/material'
import React from 'react'
import { GlobalSearchBar } from '../../../../components/global-search-filter/global-search-filter'
import { BillsManagement } from '../bills-management/bills-management';
import DocumentApprovalModel from '../../../DocumentApproval/DocumentApprovalModel/DocumentApprovalModel';


const SelectedPagination = styled(Pagination)(({ theme }) => ({
  "& .Mui-selected": {
    backgroundColor: "#6B6B80",
    color: "#FFFFFF",
  },
}));
const DocumentApproval = () => {

  // const classes = useStyles();
  return (
<Grid container spacing={2}>
  <Grid item xs={4}>
 <GlobalSearchBar/>

 <Box sx={{ display: 'flex', gap: 1, mt: 4 }}>
      <Button
        variant="contained"
        color="primary"
        sx={{ p: 2, height: '10px', backgroundColor: 'Yellow', color: 'black' }}
      >
        Padding
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{ p: 2, height: '10px', backgroundColor: 'white', color: 'black' }}
      >
        Scheduled
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{ p: 2, height: '10px', backgroundColor: 'white', color: 'black' }}
      >
        Paid
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{ p: 2, height: '10px', backgroundColor: 'white', color: 'black' }}
      >
        Rejected
      </Button>
    </Box>
    <Box sx={{display: 'flex',justifyContent:'space-between'}}>

   
    <Typography sx={{mt:2}}>
  inbox sum:£91,391.00  
    </Typography>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="body1">
        1-4 of 4
      </Typography>
      <SelectedPagination
      count={0} // Replace with the desired number of pages
      color="primary"
    />
    </Box>
    </Box>
    <Grid>
    <Box sx={{backgroundColor: 'rgba(53, 70, 93, 0.2)', p: 2, mt: 2}}>
<Box sx={{display:'flex',justifyContent:'space-between',mt:2}}>
<Typography> Berghotel Grosse Scheidegg</Typography>
     <Typography> £500.00</Typography>
</Box>
<Box sx={{ display: 'flex', gap: '2rem', mt: 2 }}>
      <Typography>20/03/2023</Typography>
      <Typography>Pending</Typography>
    </Box>
</Box>




<Box sx={{backgroundColor: 'rgba(53, 70, 93, 0.2)', p: 2, mt: 2}}>
<Box sx={{display:'flex',justifyContent:'space-between',mt:2}}>
<Typography> Berghotel Grosse Scheidegg</Typography>
     <Typography> £500.00</Typography>
</Box>
<Box sx={{ display: 'flex', gap: '2rem', mt: 2 }}>
      <Typography>20/03/2023</Typography>
      <Typography>Pending</Typography>
    </Box>
</Box>
<Box sx={{backgroundColor: 'rgba(53, 70, 93, 0.2)', p: 2, mt: 2}}>
<Box sx={{display:'flex',justifyContent:'space-between',mt:2}}>
<Typography> Berghotel Grosse Scheidegg</Typography>
     <Typography> £500.00</Typography>
</Box>
<Box sx={{ display: 'flex', gap: '2rem', mt: 2 }}>
      <Typography>20/03/2023</Typography>
      <Typography>Pending</Typography>
    </Box>
</Box>

<Box sx={{backgroundColor: 'rgba(53, 70, 93, 0.2)', p: 2, mt: 2}}>
<Box sx={{display:'flex',justifyContent:'space-between',mt:2}}>
<Typography> Berghotel Grosse Scheidegg</Typography>
     <Typography> £500.00</Typography>
</Box>
<Box sx={{ display: 'flex', gap: '2rem', mt: 2 }}>
      <Typography>20/03/2023</Typography>
      <Typography>Pending</Typography>
    </Box>
</Box>
    </Grid>



   
  </Grid>
  <Box
      sx={{
        width: '1px',
        backgroundColor: 'black',
        height: '100%',
      }}
    />



    <Grid>
   
    </Grid>
  <Grid item xs={8}>
    
  
  </Grid>
  
 
</Grid>
  )
}

export default DocumentApproval