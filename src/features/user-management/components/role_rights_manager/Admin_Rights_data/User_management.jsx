import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { TreeView, TreeItem } from '@mui/lab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const UserManagement = () => {
  const Data = [
    {
      id: 'userManagement',
      label: 'User management',
      switchOptions: [
        {
          id: '1',
          label: 'DSO Report',
          childData: [
            {
              id: 'Checkbox1',
              label: 'Export to Excel',
            },
            {
              id: 'Checkbox2',
              label: 'Export to PDF',
            },
          ],
        },
        {
          id: '2',
          label: 'Cashflow Forecasting Report',
          childData: [
            {
              id: 'Checkbox3',
              label: 'Export to Excel',
            },
            {
              id: 'Checkbox4',
              label: 'Export to PDF',
            },
          ],
        },
        // Add more switch options as needed
      ],
    },
  ];

  <TreeView
    aria-label="file system navigator"
    defaultCollapseIcon={<RemoveIcon />}
    defaultExpandIcon={<AddIcon />}
  >
    <TreeItem nodeId="2" label="Calendar" />
    <TreeItem nodeId="3" label="Chrome" />
    <TreeItem nodeId="4" label="Webstorm" />
    {/* {Data?.map((item) => {
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
                })} */}
  </TreeView>
}

export default UserManagement