import React from 'react';
import { Button, Card } from '@mui/material';
import "./addnote.scss";
import EditIcon from '../../../../../assests/svg/edit.png';
import AddNoteIcon from '../../../../../assests/svg/addnote.png';
import AddNoteModel from './AddNoteModel';
import { useAddNote } from './use-addnote';

const AddNote = () => {
  const {
    open,
    setOpen,
    handleOpen,
    handleClose,
  } = useAddNote();

  return (
    <>
      <h5 style={{marginBottom: "1rem"}}>Note History</h5>
      <Card className='addnote_container'>
        <div className='addnote_main'>
          <div className="addnote_header">
            <p>Add Note</p>
            <button onClick={handleOpen}>
              <img src={EditIcon} alt="edit" />
            </button>
          </div>
        </div>
        <div style={{textAlign: "center"}}>
          <img src={AddNoteIcon} alt="" />
        </div>
      </Card>
      <AddNoteModel
        open={open}
        handleClose={handleClose}
        onDeleteClick={handleClose}
      />
    </>
  );
}

export default AddNote;
