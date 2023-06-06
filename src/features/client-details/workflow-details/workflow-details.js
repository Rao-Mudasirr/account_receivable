
import React, { useState } from 'react';
import {workflowtableheading,workflowtabledata} from './workflow-details-data'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow,  Button ,Box} from '@mui/material';
import { GlobalSearchBar } from '../../../components/global-search-filter/global-search-filter';
import filterIcon from '../../../assests/images/client/filter.png';
// import exportIcon from '../../../assests/images/client/export.png';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckIcon from '@mui/icons-material/Check';
import checkTic from "../../../assests/images/client/check.png"

const WorkflowDetails = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = workflowtabledata.filter((data) =>
    Object.values(data).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
   <Box
      sx={{
        margin: '5px',
        display: 'flex',
        alignItems: 'center',
        marginTop: '10px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        '@media (max-width: 1200px)': {
          display: 'flex',
          flexDirection:'column',
          
        },
      }}
    >
      <GlobalSearchBar value={searchQuery} onChange={handleSearchChange} />
      <Box
        sx={{
          display: 'flex',
          gap: '10px',
          '@media (max-width: 1100px)': {
            // display: 'none',
         
          },
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          sx={{
            color: '#40404D',
            borderColor: 'black',
            '&:hover': {
              borderColor: 'black',
              color: 'black',
            },
            '@media (max-width: 1200px)': {
              marginTop: '25px',
              // alignSelf: 'flex-start',
            },
            '@media (max-width: 600px)': {
              marginTop: '25px',
              // alignSelf: 'flex-start',
              fontSize:'8px'
            },
          }}
          endIcon={<img src={filterIcon} alt="More Filter" />}
          // onClick={handleOpenFilterModal}
        >
          More Filter
        </Button>
        {/* <Button
          variant="contained"
          color="primary"
          sx={{
            background: '#2B2B33',
            '&:hover': {
              background: '#2B2B33',
            },
            '@media (max-width: 1200px)': {
              marginTop: '25px',
              alignSelf: 'flex-end',
            },
            '@media (max-width: 600px)': {
              marginTop: '25px',
              // alignSelf: 'flex-start',
              fontSize:'8px'
            },
          }}
          onClick={handleExportButtonClick}
          endIcon={<img src={exportIcon} alt="Export Text" />}
        >
          Export Text
        </Button> */}
    <Box sx={{
      
      // position: 'absolute',
      // bottom: 0,
      // right: 0,
      // display: 'none',
      '@media (max-width: 1200px)': {
        // display: 'block',
      },
    }}>
      {/* <ExportModal open={modalOpen} onClose={handleCloseModal} /> */}

    </Box>
    {/* <Box>
          <DateRangePicker
            isOpenDatePicker={isFilterModalOpen}
            onCloseDatePicker={handleCloseFilterModal}
            onApplyDate={handleApplyDate}
            anchorEl={anchorEl}
          
          />
        </Box> */}
  </Box>

</Box>
 
      <TableContainer  sx={{mt:2}}>
        <Table sx={{border:'0'}} >
        <TableHead>
      <TableRow>
      {workflowtableheading.map((header, index) => (
            <TableCell key={index} sx={{background:'#F0F0F2'}}>
              
              {index === 0 ? (
      <>
        <img src={checkTic} alt="icon" style={{ marginLeft: 4, width: '20px' }} />
        {header}
      </>
    ) : (
      header
    )}
             
            </TableCell>
          ))}

    
      </TableRow>
    </TableHead>
          <TableBody >
            {filteredData.map((row, index) => (
             <TableRow key={index}>
            <TableCell>
              {row.workstatus === ' ' ? (
               <CheckIcon/>
              ) : (
                row.workstatus
              )}
            </TableCell>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.workflowname}</TableCell>
            <TableCell>{row.rules}</TableCell>
            <TableCell>{row.percentage}</TableCell>
            <TableCell>{row.description}</TableCell>
            <TableCell>
              {row.action === '' ? (
               <VisibilityIcon/>
              ) : (
                row.action
              )}
            </TableCell>
          </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default WorkflowDetails;

