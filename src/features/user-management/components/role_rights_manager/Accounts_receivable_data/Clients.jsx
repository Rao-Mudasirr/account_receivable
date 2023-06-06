import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { TreeView, TreeItem } from '@mui/lab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';


const Clients = ({ checkboxData, onClickBtn }) => {
  const [data, setData] = useState([checkboxData]);
//   console.log(data);

  const renderSimpleData = () => {
    return checkboxData
      .filter(item => !item.parent)
      .map((item, index) => (
        <FormControlLabel
          id={item.id}
          key={index}
          onClick={onClickBtn}
          control={<Checkbox />}
          label={item.label}
        />
      ));
  };

  const TreeItemStyled = styled(TreeItem)`
  color: black;
  background-color:white;
  .MuiTreeItem-content {
    background-color:white
  }
.MuiTreeItem-label:hover  
  .MuiTreeItem-label:hover{
    background-color:white
    color:white
  }

  .MuiTreeItem-content.Mui-selected{
    background-color:white;
  }

`;

  const renderTreeViewData = () => {
    return checkboxData
      .filter(item => item.parent)
      .map(item => (
        <TreeItemStyled
          nodeId={item.id}
          label={
            <FormControlLabel control={<Checkbox />} label={item.label} />
          }
        >
          {item.parent.childData.map((item2, index) => (
            <TreeItemStyled
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
        </TreeItemStyled>
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
