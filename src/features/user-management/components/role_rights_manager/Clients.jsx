import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { TreeView, TreeItem } from '@mui/lab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/material';

const Clients = ({ checkboxData, onClickBtn }) => {
  const [data, setData] = useState([checkboxData]);
  console.log(data);

  const renderSimpleData = () => {
    return checkboxData
      .filter(item => !item.parent)
      .map((item, index) => (
        <FormControlLabel
          id={item.id}
          key={index}
          onClick={onClickBtn}
          control={<Checkbox disabled />}
          label={item.label}
        />
      ));
  };

  const renderTreeViewData = () => {
    return checkboxData
      .filter(item => item.parent)
      .map(item => (
        <TreeItem
          nodeId={item.id}
          label={
            <FormControlLabel control={<Checkbox />} label={item.label} />
          }
        >
          {item.parent.childData.map((item2, index) => (
            <TreeItem
              nodeId={item2.id}
              key={index}
              label={
                <FormControlLabel
                  control={<Checkbox />}
                  label={item2.label}
                />
              }
            />
          ))}
        </TreeItem>
      ));
  };

  return (
    <>
      <Box sx={{ ml: 3.8 }}>
        <FormGroup>{renderSimpleData()}</FormGroup>
      </Box>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<RemoveIcon />}
        defaultExpandIcon={<AddIcon />}
      >
        {renderTreeViewData()}
      </TreeView>
    </>
  );
};

export default Clients;
