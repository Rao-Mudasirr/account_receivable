import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { TreeView, TreeItem } from '@mui/lab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const UserManagement = (checkboxData2) => {
  // console.log(checkboxData2.checkboxData2)
  const data = checkboxData2.checkboxData2;
  return (
    <>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<RemoveIcon />}
        defaultExpandIcon={<AddIcon />}
      >
        {data.map((item) => {
          return (
            <TreeItem
              nodeId={item.id} label={
                <FormControlLabel
                  control={<Checkbox />} label={item.label} />
              }>
              {item.parent.childData?.map((item2) => {
                return (

                  <TreeItem nodeId={item2.id} label={
                    <FormControlLabel control={<Checkbox />}
                      label={item2.label} />
                  } />
                )
              })}
            </TreeItem>
          )
        })}
      </TreeView>
    </>
  );
};


export default UserManagement;
