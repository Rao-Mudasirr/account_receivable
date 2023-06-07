import React from 'react';
import { Button, Card } from '@mui/material';
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ExportModal from '../export-modal/export-modal';
import DatePickerModal from '../date-picker-modal/date-picker-modal';

const CardFilter=({handleClick, filter_type, isOpen,})=> {
    
  return (
    <div>
          {isOpen && (
            <Card
              style={{
                width: "592px",
                // height: '376px',
                position: "absolute",
                right: "50px",
                zIndex: 10,
                padding: "24px",
                marginTop: "7px",
                boxShadow: "0px 9px rgba(0, 0, 0, 0.2);",
                borderRadius: "8px",
              }}
            >
              {/* <ul> */}
              <div className="filter-heading">
                <div className="title-filter">{filter_type == "More" ? 'Filters' : filter_type == 'Export' && 'Export'}</div>
                <div className="icon-filter" onClick={handleClick} style={{cursor:'pointer'}}>
                  <CancelOutlinedIcon />{" "}
                </div>
              </div>
              <br />
            {
                filter_type == "Export" ? 
                    <ExportModal />
                    : filter_type == 'More' && 
                    <DatePickerModal />
            }
              {/* </ul> */}
              <br/>
              <br/>
              <div
                className="filter-below-btn"
                style={{ display: "flex", float: "right" }}
              >
                <Button className="btn1" onClick={handleClick}
                sx={{
                    color: '#000000',
                    borderColor: '#000000',
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