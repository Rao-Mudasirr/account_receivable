import React, { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { TreeView, TreeItem } from '@mui/lab'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { styled } from '@mui/material/styles';



const Reports = ({ checkboxData, onClickBtn }) => {
    const [data, setData] = useState([checkboxData])
    // console.log(data);

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


    return (
        <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<RemoveIcon />}
            defaultExpandIcon={<AddIcon />}
        >
            {checkboxData?.map((item) => {
                return (

                    <TreeItemStyled
                        nodeId={item.id} label={
                            <FormControlLabel
                                control={<Checkbox disabled/>} label={item.label} />
                        }>
                        {item.parent.childData?.map((item2) => {
                            return (

                                <TreeItemStyled nodeId={item2.id} label={
                                    <FormControlLabel control={<Checkbox disabled/>}
                                        label={item2.label} />
                                } />
                            )
                        })}
                    </TreeItemStyled>
                )
            })}
        </TreeView>
    );
};


export default Reports;
