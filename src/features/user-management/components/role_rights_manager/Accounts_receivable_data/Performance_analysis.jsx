import React, { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { TreeView, TreeItem } from '@mui/lab'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { makeStyles } from '@material-ui/core';
import { styled } from '@mui/material/styles';


const useStyles = makeStyles((theme) => ({
    "@global": {
        ".MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label": {
            backgroundColor: "black",
            color: 'red'
        },
        ".MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label:hover, .MuiTreeItem-root.Mui-selected:focus > .MuiTreeItem-content .MuiTreeItem-label": {
            backgroundColor: "red",
        },
    },
}));

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

const Performance_analysis = ({ checkboxData }) => {
    const [data, setData] = useState([checkboxData])
    const classes = useStyles();

    return (

        <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<RemoveIcon />}
            defaultExpandIcon={<AddIcon />}
            className={classes}
        >
            {checkboxData?.map((item) => {
                return (

                    <TreeItemStyled
                        nodeId={item.id} label={
                            <FormControlLabel
                                control={<Checkbox />} label={item.label} />
                        }>
                        {item.parent.childData?.map((item2) => {
                            return (

                                <TreeItemStyled nodeId={item2.id} label={
                                    <FormControlLabel control={<Checkbox />}
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


export default Performance_analysis;
