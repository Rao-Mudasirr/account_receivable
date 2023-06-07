import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from '@mui/material';
import { invoicestableheading, invoicestabledata } from './due-invoices-data';
import { GlobalSearchBar } from '../../../components/global-search-filter/global-search-filter';
import Button from '@mui/material/Button';
import srIcon from '../../../assests/images/client/sricon.png';
import "./due-invoices.scss";
import filterIcon from '../../../assests/images/client/filter.png'
import exportIcon from '../../../assests/images/client/export.png'
import CardFilter from '../components/card-filter/card-filter';



const DueInvoices = ({ status }) => {
  // states   
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("");

  // Modal Function 
const modalClickHandlar = () => {
setIsOpen(!isOpen);
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

  return (
    <div>
      
      <div className='container-table'
        style={{
          margin: "5px",
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
          
        }}
        >
      <div style={{alignSelf: "flex-start"}} className='search-bar'> <GlobalSearchBar value={searchTerm} onChange={SearchClickhandler} /></div>
        <div style={{ marginLeft: "auto" }} className='tabal-header'>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              mr: 2,
              color: "#40404D",
              borderColor: "#40404D",
              borderRadius:'8px',
              "&:hover": {
                borderColor: "black",
                color: "black",
              },
            }}
            endIcon={<img src={filterIcon} alt="More Filter" />}
            onClick={()=> {
              setType("More")
              modalClickHandlar()
            }}
            className='filter-btn'
          >
            More Filter
          </Button>

          <Button
            variant="contained"
            color="primary"
            sx={{
              background: "#2B2B33",
              borderRadius: '8px',
              "&:hover": {
                background: "#2B2B33",
              },
            }}
            endIcon={<img src={exportIcon} alt="Export Text" />}
            onClick={()=> {
                setType("Export")
                modalClickHandlar()
              }}
              className='export-btn'
          >
            Export Text
          </Button>
          <CardFilter 
            filter_type = {type}
            handleClick = {modalClickHandlar}
            isOpen = {isOpen}
             />
        </div>
      </div>
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
