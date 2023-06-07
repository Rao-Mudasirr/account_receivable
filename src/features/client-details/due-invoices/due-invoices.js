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
            // color="primary"
            className="outlined-filter-btn tertiary-color filter-btn font-family-exo2"
            sx={{
              mr: 2,
              color: "#40404D",
              borderColor: "#40404D",
              width:'122px',
              padding:'8px',
              height:'32px',
              border:'1.5px solid #40404D',
              fontWeight:400,
              fontSize:"0.75rem",
              borderRadius:'8px',
              textTransform: 'capitalize',
              "&:hover": {
                borderColor: "black",
                color: "black",
              },
            }}
            endIcon={<img src={filterIcon} alt="More Filter" width={16} height ={16}/>}
            onClick={()=> {
              setType("More")
              modalClickHandlar()
            }}
            
          >
            More Filters
          </Button>

          <Button
              className="export-btn  font-family-exo2"
            variant="contained"
             width="93px"
             height="32px"
            sx={{
              background: "#2B2B33",
              fontWeight:400,
              fontSize:"0.75rem",
              borderRadius:'8px',
              textTransform: 'capitalize',
              "&:hover": {
                background: "#2B2B33",
              },
            }}
            endIcon={<img src={exportIcon} alt="Export Text"  width={16} height ={16} />}
            onClick={()=> {
                setType("Export")
                modalClickHandlar()
              }}
             
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
                <TableCell key={index} sx={{ background: '#F0F0F2',fontWeight:600 }} className='secondary-color font-family-exo2 primary-title'>
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
                <TableCell sx={{ textDecoration: 'underline', cursor: 'pointer',color:'#0084AD' }}  ><span   style={{color:'#0084AD'}}>{row.invoiceid}</span> </TableCell>
                <TableCell>
                  <span
                    className={`status-cell  ${row.status.toLowerCase()}`}
                  
                  >
                    {row.status}</span>
                </TableCell>
                <TableCell className='font-family-exo2 tertiary-color primary-title' sx={{fontWeight:400}}>{row.name}</TableCell>
                <TableCell  className='font-family-exo2 tertiary-color primary-title' sx={{fontWeight:400}}>{row.dateissue}</TableCell>
                <TableCell  className='font-family-exo2 tertiary-color primary-title' sx={{fontWeight:400}}>{row.duedate}</TableCell>
                <TableCell  className='font-family-exo2 tertiary-color primary-title' sx={{fontWeight:400}}>{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DueInvoices;
