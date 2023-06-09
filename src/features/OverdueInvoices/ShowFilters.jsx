import React from 'react';
import { Button, Card } from '@mui/material';
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Export from './Export';
import Date_Range from './Date_Range';

function ShowFilters({handleClick, filter_type, isOpen}) {
  return (
    <div>
          {isOpen && (
            <Card
              style={{
                width: "592px",
                // height: '376px',
                position: "absolute",
                right: "50px",
                zIndex: 999,
                padding: "24px",
                marginTop: "12px",
                background: '#FFFFFF',
                boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.16)',
                borderRadius: '8px',
                
                '@media (max-width: 768px)': {
                  width: 'auto',
                  padding:'20px',
                  margin:'10px',
                },
              }}
            >
              {/* <ul> */}
              <div className="filter-heading">
                <div className="title-filter">{filter_type == "More" ? 'Filters' : filter_type == 'Export' && 'Export'}</div>
                <div className="icon-filter" onClick={handleClick}>
                  <CancelOutlinedIcon />{" "}
                </div>
              </div>
              <br />
            {
                filter_type == "Export" ? 
                    <Export />
                    : filter_type == 'More' && 
                    <Date_Range />
            }
              {/* </ul> */}
              <br/>
              <br/>
              <div
                className="filter-below-btn"
                style={{ display: "flex", float: "right" }}
              >
                <Button className="btn1" onClick={handleClick}>
                  Clear
                </Button>
                &nbsp;
                <Button className="btn2">Apply</Button>
              </div>
            </Card>
          )}
    </div>
  )
}

export default ShowFilters