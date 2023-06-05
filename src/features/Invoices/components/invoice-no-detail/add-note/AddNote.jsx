import React from 'react'
import { Card } from '@mui/material'
import "./addnote.css"
import EditIcon from '../../../../../assests/svg/edit.png'
import AddNoteIcon from '../../../../../assests/svg/addnote.png'
const AddNote = () => {
  return (
    <div>
      <h5>
    Note History
    </h5>
    <Card className='addnote_container'>
        <div className='addnote_main'>
        <div className="addnote_header">
            <p>Add Note</p>
            <img src={EditIcon} alt="edit" />
        </div>
        
        </div>
        <div style={{textAlign: "center"}}>
        <img src={AddNoteIcon} alt="" />
        </div>
        </Card>
        </div>
  )
}

export default AddNote;