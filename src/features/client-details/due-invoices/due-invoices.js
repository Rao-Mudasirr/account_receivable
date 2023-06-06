import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from '@mui/material';
import { invoicestableheading, invoicestabledata } from './due-invoices-data';
import { GlobalSearchBar } from '../../../components/global-search-filter/global-search-filter';
import Button from '@mui/material/Button';
import srIcon from '../../../assests/images/client/sricon.png';
import "./due-invoices.scss";

import filterIcon from '../../../assests/images/client/filter.png'
import exportIcon from '../../../assests/images/client/export.png'
import ExportModal from '../components/export-modal/export-modal';
import DateRangePicker from '../../../components/date-range-picker/date-range-picker';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';




const DueInvoices = ({ status }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const [isFilterModalOpen, setFilterModalOpen] = useState(false);

  const handleOpenFilterModal = (event) => {
    setFilterModalOpen(true);
    setAnchorEl(event.currentTarget);

  };

  const handleCloseFilterModal = () => {
    setFilterModalOpen(false);
  };

  const filteredRows = invoicestabledata.filter(row =>
    (status === 'All' || row.status === status) &&
    (row.invoiceid.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.status.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const SearchClickhandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleExportButtonClick = (event) => {
    // setModalOpen(true);
     setAnchorEl(event.currentTarget);
     setModalOpen((previousOpen) => !previousOpen);
  };

  const handleCloseModal = () => {
    setModalOpen(false);

  };

  const handleApplyDate = (date) => {
    console.log('Selected date:', date);
    // Do something with the selected date
  };

  const canBeOpen = modalOpen && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;
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
      <GlobalSearchBar value={searchTerm} onChange={SearchClickhandler} />
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
            
            },
            '@media (max-width: 600px)': {
            
              
              fontSize:'7px'
            },
          }}
          endIcon={<img src={filterIcon} alt="More Filter" />}
          onClick={handleOpenFilterModal}
        >
          More Filter
        </Button>
        <div>
      <Button
        aria-describedby={id}
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
            fontSize: '7px',
          },
        }}
        onClick={handleExportButtonClick}
        endIcon={<img src={exportIcon} alt="Export Text" />}
      >
        Export Text
      </Button>
      <Popper id={id} open={modalOpen} anchorEl={anchorEl} placement="bottom-start" transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
              <ExportModal open={modalOpen} onClose={handleCloseModal} />
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
    {/* <Box sx={{
      // position: 'absolute',
      // bottom: 0,
      // right: 0,
      // display: 'none',
      '@media (max-width: 1200px)': {
        // display: 'block',
      },
    }}> */}
      
    

    {/* </Box> */}
    <Box>
          <DateRangePicker
            isOpenDatePicker={isFilterModalOpen}
            onCloseDatePicker={handleCloseFilterModal}
            onApplyDate={handleApplyDate}
          
          />
        </Box>
  </Box>

</Box>


     

      <TableContainer sx={{ mt: 2 }}>
        <Table sx={{ border: '0' }} >
          <TableHead>
            <TableRow>
              {invoicestableheading.map((header, index) => (
                <TableCell key={index} sx={{ background: '#F0F0F2' }}>
                  {index === 0 ? (
                    <>
                      {header}
                      <img src={srIcon} alt="icon" style={{ marginLeft: 5, width: '7px', }} />

                    </>
                  ) : (
                    header
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody >
            {filteredRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.srno}</TableCell>
                <TableCell sx={{ textDecoration: 'underline', cursor: 'pointer' }} className='invoice-id'>{row.invoiceid} </TableCell>
                <TableCell>
                  <span
                    className={`status-cell ${row.status.toLowerCase()}`}
                  >
                    {row.status}</span>
                </TableCell>
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
};

export default DueInvoices;
