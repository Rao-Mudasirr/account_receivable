import React from 'react';
import { Button, Card, Typography } from '@mui/material';
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ExportModal from '../export-modal/export-modal';
import DatePickerModal from '../date-picker-modal/date-picker-modal';
import './card.scss';

const CardFilter=({handleClick, filter_type, isOpen,})=> {
  const cardStyle = {
    zIndex: '999', // Set the desired z-index value
       width: "592px",
                // height: '376px',
                position: "absolute",
                right: "50px",
                padding: "24px",
                marginTop: "12px",
                boxShadow: "0px 9px rgba(0, 0, 0, 0.2);",
                borderRadius: "8px",
                '@media (max-width: 600px)': {
                  width: 'auto',
                  padding:'20px'
                },
  };
    
  return (
    <div>
          {isOpen && (
            <Card
              // sx={{

              //   width: "592px",
              //   // height: '376px',
              //   position: "absolute",
              //   right: "50px",
              //   zIndex: 10,
              //   padding: "24px",
              //   marginTop: "12px",
              //   boxShadow: "0px 9px rgba(0, 0, 0, 0.2);",
              //   borderRadius: "8px",
                
              // }}
              style={cardStyle}
            >
              {/* <ul> */}
             
              <div className="icon-filter" onClick={handleClick} style={{cursor:'pointer',display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
                  <CancelOutlinedIcon className='cance-circle-icon' />{" "}
                </div>
             
              <div 
              className=""
              >
                <Typography className="heading-20 font-family-exo2 primary-color" sx={{fontWeight:600}}>{filter_type === "More" ? 'Filters' : filter_type === 'Export' && 'Export'}</Typography>
              </div>
              
            {
                filter_type === "Export" ? 
                    <ExportModal />
                    : filter_type === 'More' && 
                    <DatePickerModal />
            }
              {/* </ul> */}
             
              <div
                className="filter-below-btn"
                style={{ display: "flex", float: "right",marginTop:'40px'}}
              >
                <Button className="btn1 font-family-exo2 " onClick={handleClick}
                sx={{
                    // color: '#000000',
                    // borderColor: '#000000',
                    marginRight: '8px',
                    '&:hover': {
                      borderColor: '#000000',
                      color: '#000000',
                    }}}
                  
                    >
                  Clear
                </Button>
                &nbsp;
                <Button className="btn2" onClick={handleClick}
                 sx={{
                   color: '#FFFFFF',
                   background: '#000000',
                   '&:hover': {
                     background: '#000000',
                     color: '#FFFFFF',
                   },
                 }}
                 >Apply</Button>
              </div>
            </Card>
          )}
    </div>
  )
}

export default CardFilter