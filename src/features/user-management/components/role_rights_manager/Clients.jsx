import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { TreeView, TreeItem } from '@mui/lab'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/material';
const Clients = ({ checkboxData, onClickBtn }) => {

   
    return (
        <>
        <Box sx={{ml: 3.8}}>
            <FormGroup>
                {checkboxData.map((item, index) => {
                    return (
                        <FormControlLabel
                            id={item.id}
                            key={index}
                            onClick={onClickBtn}
                            control={<Checkbox />}
                            label={item.label}
                        />
                    );
                })}
            </FormGroup>
            </Box>
            <TreeView
                aria-label="file system navigator"
                defaultCollapseIcon={<RemoveIcon />}
                defaultExpandIcon={<AddIcon/>}
            >
                <TreeItem nodeId="1" label={
                   <FormControlLabel control={<Checkbox/>} label="Label" />
                }>
                    <TreeItem nodeId="2" label={
                        <FormControlLabel control={<Checkbox/>} label="Label" />
                    } />
                </TreeItem>
            </TreeView>
        </>
    );
};

export default Clients;

