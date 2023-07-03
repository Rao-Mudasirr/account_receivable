import { Grid ,Box,Button, Typography,Pagination, styled} from '@mui/material'
import React from 'react'
import { GlobalSearchBar } from '../../../../components/global-search-filter/global-search-filter'
import { BillsManagement } from '../bills-management/bills-management';
import DocumentApprovalModel from '../../../DocumentApproval/DocumentApprovalModel/DocumentApprovalModel';
import './document-approval.scss'





const SelectedPagination = styled(Pagination)(({ theme }) => ({
  "& .Mui-selected": {
    backgroundColor: "#6B6B80",
    color: "#FFFFFF",
  },
}));

const buttonStyles = {
  Pending: {
    backgroundColor: '#FFFFFF !important',
    color: 'black !important',
    border: '2px solid #FFFFFF !important',
  },
  Scheduled: {
    backgroundColor: '#FFFFFF !important',
    color: 'black !important',
    border: '2px solid #FFFFFF !important',
  },
  Paid: {
    backgroundColor: '#FFFFFF !important',
    color: 'black !important',
    border: '2px solid #FFFFFF !important',
  },
  Rejected: {
    backgroundColor: '#FFFFFF !important',
    color: 'black !important',
    border: '2px solid #FFFFFF !important',
  },
};
const selectedButtonStyles = {
  Pending: {
    backgroundColor: '#FFF0C2',
    color: '#FFBF00',
    border: '2px solid #FFBF00',
  },
  Scheduled: {
    backgroundColor: '#D1DEFF',
    color: '#3F75FF',
    border: '2px solid #3F75FF',
  },
  Paid: {
    backgroundColor: '#D3E7D8',
    color: '#48995D',
    border: '2px solid #48995D',
  },
  Rejected: {
    backgroundColor: '#FFD1D1',
    color: '#FF3F3F',
    border: '2px solid #FF3F3F',
  },
};
const DocumentApproval = () => {

  const [selectedButton, setSelectedButton] = React.useState('Pending');

  return (
<Grid container spacing={2}>
  <Grid item xs={4}>
 <GlobalSearchBar/>

 <Box sx={{ display: 'flex', gap: 1, mt: 4 }}>
 <Button
  className={`tertiary-color primary-title font-family-exo2 ${selectedButton === 'Pending' ? 'selected' : ''}`}
  sx={{
    p: 2,
    height: '10px',
    textTransform: 'capitalize',
    borderRadius: '8px',
    border: '2px',
    ...(selectedButton === 'Pending' ? selectedButtonStyles.Pending : buttonStyles.Pending),
  }}
  onClick={() => setSelectedButton('Pending')}
>
  Pending
</Button>
<Button
  className={`tertiary-color primary-title font-family-exo2 ${selectedButton === 'Scheduled' ? 'selected' : ''}`}
  sx={{
    p: 2,
    height: '10px',
    textTransform: 'capitalize',
    borderRadius: '8px',
    border: '2px',
    ...(selectedButton === 'Scheduled' ? selectedButtonStyles.Scheduled : buttonStyles.Scheduled),
  }}
  onClick={() => setSelectedButton('Scheduled')}
>
  Scheduled
</Button>
<Button
  className={`tertiary-color primary-title font-family-exo2 ${selectedButton === 'Paid' ? 'selected' : ''}`}
  sx={{
    p: 2,
    height: '10px',
    textTransform: 'capitalize',
    borderRadius: '8px',
    border: '2px',
    ...(selectedButton === 'Paid' ? selectedButtonStyles.Paid : buttonStyles.Paid),
  }}
  onClick={() => setSelectedButton('Paid')}
>
  Paid
</Button>
<Button
  className={`tertiary-color primary-title font-family-exo2 ${selectedButton === 'Rejected' ? 'selected' : ''}`}
  sx={{
    p: 2,
    height: '10px',
    textTransform: 'capitalize',
    borderRadius: '8px',
    border: '2px',
    ...(selectedButton === 'Rejected' ? selectedButtonStyles.Rejected : buttonStyles.Rejected),
  }}
  onClick={() => setSelectedButton('Rejected')}
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
      count={0} 
      color="primary"
    />
    </Box>
    </Box>
    <Grid>
    <Box sx={{  p: 2, }}>
<Box sx={{display:'flex',justifyContent:'space-between',mt:2}}>
<Typography> Berghotel Grosse Scheidegg</Typography>
     <Typography> £500.00</Typography>
</Box>
<Box sx={{ display: 'flex', gap: '2rem', }}>
      <Typography>20/03/2023</Typography>
     
<Typography sx={{ color: selectedButtonStyles[selectedButton]?.color }}>
  {selectedButton}
</Typography>

    </Box>
</Box>




<Box sx={{  p: 2, }}>
<Box sx={{display:'flex',justifyContent:'space-between'}}>
<Typography> Berghotel Grosse Scheidegg</Typography>
     <Typography> £500.00</Typography>
</Box>
<Box sx={{ display: 'flex', gap: '2rem', mt: 2 }}>
      <Typography>20/03/2023</Typography>
     
<Typography sx={{ color: selectedButtonStyles[selectedButton]?.color }}>
  {selectedButton}
</Typography>


    </Box>
</Box>
<Box sx={{  p: 2, }}>
<Box sx={{display:'flex',justifyContent:'space-between'}}>
<Typography> Berghotel Grosse Scheidegg</Typography>
     <Typography> £500.00</Typography>
</Box>
<Box sx={{ display: 'flex', gap: '2rem',  }}>
      <Typography>20/03/2023</Typography>
     
<Typography sx={{  color: selectedButtonStyles[selectedButton]?.color }}>
  {selectedButton}
</Typography>


    </Box>
</Box>

<Box sx={{  p: 2, }}>
<Box sx={{display:'flex',justifyContent:'space-between',}}>
<Typography> Berghotel Grosse Scheidegg</Typography>
     <Typography> £500.00</Typography>
</Box>
<Box sx={{ display: 'flex', gap: '2rem',  }}>
      <Typography>20/03/2023</Typography>
     
<Typography sx={{  color: selectedButtonStyles[selectedButton]?.color }}>
  {selectedButton}
</Typography>


    </Box>
</Box>
    </Grid>



   
  </Grid>
  
    <Grid>
   
    </Grid>
  <Grid item xs={8}>
    
  
  </Grid>
  
 
</Grid>
  )
}

export default DocumentApproval