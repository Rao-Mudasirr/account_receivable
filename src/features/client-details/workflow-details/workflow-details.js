
import React, { useState } from 'react';
import {workflowtableheading,workflowtabledata} from './workflow-details-data'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow,  Button } from '@mui/material';
import { GlobalSearchBar } from '../../../components/global-search-filter/global-search-filter';
import filterIcon from '../../../assests/images/client/filter.png';
import exportIcon from '../../../assests/images/client/export.png';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckIcon from '@mui/icons-material/Check';

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
    <div style={{ margin: '5px', display: 'flex', alignItems: 'center' ,marginTop:'10px'}}>
      <GlobalSearchBar
      value={searchQuery}
      onChange={handleSearchChange}
       
       />

      <div style={{ marginLeft: 'auto' }}>
      <Button
        variant="outlined"
        color="primary"
        sx={{
          mr: 2,
          color: '#40404D',
          borderColor: 'black',
          '&:hover': {
            borderColor: 'black',
            color: 'black',
          },
        }}
        endIcon={<img src={filterIcon} alt="More Filter" />}
      >
        More Filter
      </Button>

      <Button
        variant="contained"
        color="primary"
        sx={{
          background: '#2B2B33',
          '&:hover': {
            background: '#2B2B33',
          },
        }}
        endIcon={<img src={exportIcon} alt="Export Text" />}
      >
        Export Text
      </Button>
    </div>
    </div>
 
      <TableContainer  sx={{mt:2}}>
        <Table sx={{border:'0'}} >
        <TableHead>
      <TableRow>
      {workflowtableheading.map((header, index) => (
            <TableCell key={index} sx={{background:'#F0F0F2'}}>
              
               { header}
             
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

