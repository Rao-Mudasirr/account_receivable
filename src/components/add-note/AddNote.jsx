import React from 'react'
import { Card } from '@mui/material'
import "./addnote.css"
import EditIcon from '../../assests/svg/edit.png'

export const AddNote = () => {
  return (
    <Card className='addnote_container'>
        <div className='addnote_main'>
        <div className="addnote_header">
            <p>Add Note</p>
            <img src={EditIcon} alt="edit" />
        </div>
        
        
        </div>
        </Card>
  )
}
