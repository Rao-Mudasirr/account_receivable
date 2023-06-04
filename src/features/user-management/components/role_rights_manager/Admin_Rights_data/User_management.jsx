import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { TreeView, TreeItem } from '@mui/lab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const UserManagement = ({ checkboxData2 }) => {
  console.log(checkboxData2)
  return (
    <>
      <TreeView
        aria-label="user management tree"
        defaultCollapseIcon={<RemoveIcon />}
        defaultExpandIcon={<AddIcon />}
      >
        {checkboxData2?.map((section) => (
          <TreeItem key={section.id} nodeId={section.id} label={section.heading}>
            {section.switchOptions?.map((item) => (
              <TreeItem key={item.id} nodeId={item.id} label={item.label}>
                {item.parent.childData?.map((childItem) => (
                  <TreeItem
                    key={childItem.id}
                    nodeId={childItem.id}
                    label={
                      <FormControlLabel
                        control={<Checkbox />}
                        label={childItem.label}
                      />
                    }
                  />
                ))}
              </TreeItem>
            ))}
          </TreeItem>
        ))}
      </TreeView>
    </>
  );
};

export default UserManagement;
