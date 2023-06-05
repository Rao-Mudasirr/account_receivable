import React, {useState} from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { TreeView, TreeItem } from '@mui/lab'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Reports = ({ checkboxData, onClickBtn }) => {
    const [data, setData] = useState([checkboxData])
    console.log(data);


    return (
            <TreeView 
                aria-label="file system navigator"
                defaultCollapseIcon={<RemoveIcon />}
                defaultExpandIcon={<AddIcon />}
            >
                {checkboxData?.map((item) => {
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
    );
};


export default Reports;
