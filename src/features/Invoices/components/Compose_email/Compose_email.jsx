import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './compose_email.css'
import { useTheme } from "@emotion/react";
import { Chip, Modal } from '@mui/material';
import Editor_page from './editor'

export default function Compose_email(props) {

  const { open, handleClose, } = props;
  const theme = useTheme();

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (

    <Modal
      open={open}
      onClose={handleClose}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Card sx={{ width: 900, height: 700, }}>
        <CardContent sx={{ ml: 0 }}>
          <div className="tags_email">
            <div className="card_data">
              <ul>
                <li>To</li>
                <li><Chip label="Chip Filled"
                  size="small" />
                </li>
              </ul>
            </div>
            <div className="card_data">
              <ul>
                <li>From</li>
                <li><Chip
                  label="Clickable Deletable"
                  size="small"
                  onClick={handleClick}
                  onDelete={handleDelete}
                /></li>
              </ul>
            </div>
            <div className="card_data">
              <ul>
                <li>Subject</li>
                <li>{`{{COMPANY NAME - 12Days}}`}</li>
              </ul>
            </div>
          </div>
          <CardContent sx={{ border: '1px solid lightgray', height: 5 }}>
            <div className="tags_bar">
              <ul>
                <li>File</li>
                <li>Edit</li>
                <li>View</li>
                <li>Insert</li>
                <li>Format</li>
                <li>Tools</li>
                <li>Table</li>
              </ul>
            </div>
          </CardContent>
          <div className="email_card">
            <Editor_page />
          </div>
        </CardContent>
      </Card>
    </Modal>

  );
}