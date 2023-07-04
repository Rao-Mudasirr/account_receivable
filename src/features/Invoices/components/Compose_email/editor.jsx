import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './compose_email.scss';
import { Button } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmailEditor = ({ handleClose }) => {
  const [editorContent, setEditorContent] = useState('');


  const handleEditorChange = (content) => {
    try {
      setEditorContent(content);
    } catch (error) {
      console.error('Error setting editor content:', error);
    }
  };

  const handleSureClick = () => {
    const toastText = 'Email send successfully';
    sendEmail();
    toast.success(toastText);
  };

  const sendEmail = () => {
    console.log('Sending email:', editorContent);
  };

  // const cancelEmail = () => {
  //   handleClose(false);
  // };

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
      <div className="editor_content editor_scroll">
        <ReactQuill
          value={editorContent}
          onChange={handleEditorChange}
          modules={modules}
        />
      </div>
      <div className="btns">
        <Button variant="outlined" color="inherit" onClick={() => handleClose()}>
          Cancel
        </Button>
        <Button
          sx={{
            background: "#2B2B33",
            color: "white",
            "&:hover": {
              background: 'black',
              color: "white",
              border: '1px solid black'
            },
          }}
          onClick={handleSureClick}
        >
          Send
        </Button>
      </div>
      <ToastContainer />
    </>
  );
};

export default EmailEditor;
