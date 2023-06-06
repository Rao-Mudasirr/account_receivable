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