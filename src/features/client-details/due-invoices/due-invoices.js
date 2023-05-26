import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,  } from '@mui/material';
import { invoicestableheading, invoicestabledata } from './due-invoices-data';
import { GlobalSearchBar } from '../../../components/global-search-filter/global-search-filter';
import Button from '@mui/material/Button';


import filterIcon  from '../../../assests/images/client/filter.png'
import exportIcon from '../../../assests/images/client/export.png'

const DueInvoices = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredRows = invoicestabledata.filter(row =>
    row.invoiceid.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const SearchClickhandler = (event) => {
    setSearchTerm(event.target.value);
  };

  
  return (
    <div>
    <div style={{ margin: '5px', display: 'flex', alignItems: 'center' ,marginTop:'10px'}}>
      <GlobalSearchBar value={searchTerm} onChange={SearchClickhandler} />

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
 
      <TableContainer component={Paper} sx={{mt:2}}>
        <Table>
        <TableHead>
      <TableRow>
        {invoicestableheading.map((item, index) => (
          <TableCell key={index} sx={{ background: '#F0F0F2' }}>
            {/* {item.icon && <img src={item.icon} alt={item.label} />} 
            {item.label} */}
            {item}
           
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
          <TableBody sx={{border:'1px solid black'}}>
            {filteredRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.srno}</TableCell>
                <TableCell>{row.invoiceid}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.dateissue}</TableCell>
                <TableCell>{row.duedate}</TableCell>
                <TableCell>{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DueInvoices;
