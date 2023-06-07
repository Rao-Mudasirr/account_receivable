
import React, { useState } from 'react';
import {workflowtableheading,workflowtabledata} from './workflow-details-data'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow,  Button ,Box} from '@mui/material';
import { GlobalSearchBar } from '../../../components/global-search-filter/global-search-filter';
import filterIcon from '../../../assests/images/client/filter.png';
import exportIcon from '../../../assests/images/client/export.png';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckIcon from '@mui/icons-material/Check';
import checkTic from "../../../assests/images/client/check.png"
import CardFilter from '../components/card-filter/card-filter';
import GlobalModal from '../../../components/global-modal/global-modal';
import { toast, ToastContainer } from 'react-toastify';

const WorkflowDetails = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("");
  const [openModal, setOpenModal] = useState(false);
  

  // Modal Function 
const modalClickHandlar = () => {
setIsOpen(!isOpen);
};

const openModalClickHandler = () => {
 
  setOpenModal(true);
};

const handleModalClose = () => {
  setOpenModal(false);
};
const handleSureClick = () => {
  const toastText ='Work Flow has been changed';
  setOpenModal(false);
  toast.success(toastText); 
};
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
   <div className='container-table'
        style={{
          margin: "5px",
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
          
        }}
        >
      <div style={{alignSelf: "flex-start"}} className='search-bar'> <GlobalSearchBar value={searchQuery} onChange={handleSearchChange} /></div>
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
              className='export-btn'
            onClick={openModalClickHandler}
          >
            Change Text
          </Button>
          <CardFilter 
            filter_type = {type}
            handleClick = {modalClickHandlar}
            isOpen = {isOpen}
             />

             <GlobalModal
             
             open={openModal}
             handleClose={handleModalClose}

             onSureClick={handleSureClick}
             modalText="You Want to Change Work Flow"
            //  modalIcon={modalIconimage}
             
             />
        </div>
      </div>
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

