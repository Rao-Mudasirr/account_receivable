import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './compose_email.css'
import { Button } from '@mui/material';
const EmailEditor = () => {
  const [editorContent, setEditorContent] = useState('');

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const sendEmail = () => {
    alert('Email send successfully');
  };

  const cancelEmail = () => {
    setEditorContent('');
  };

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ color: [] }, { background: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
  };

  return (
    <>
      <div className='editor_content editor_scroll'>
        <ReactQuill
          value={editorContent}
          onChange={handleEditorChange}
          modules={modules}
        />
      </div>
      <div className="btns">
        <Button variant="outlined" color="inherit" onClick={cancelEmail}>
          Cancel</Button>
        <Button
          sx={{
            background: "black",
            color: "white",
            "&:hover": {
              background:'white',
              color: "inherit",
              border: '1px solid black'
            }
          }}
          onClick={sendEmail}
        >
          Send
        </Button>

      </div>
    </>
  );
};

export default EmailEditor;
