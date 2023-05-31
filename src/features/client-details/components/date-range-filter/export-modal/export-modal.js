import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';

const ExportModal = ({ open, onClose, onApply }) => {
  const [selectedFormat, setSelectedFormat] = useState(null);

  const handleFormatChange = (format) => {
    setSelectedFormat(format);
  };

  const handleApplyClick = () => {
    if (selectedFormat) {
      onApply(selectedFormat);
    }
    onClose();
  };

  const handleClearClick = () => {
    setSelectedFormat(null);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div style={{ height: '316px', width: '592px', borderRadius: '8px', background: '#FFFFFF', boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.16)', padding: '16px', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Export</h3>
          <CloseIcon onClick={onClose} style={{ cursor: 'pointer', color: '#000000' }} />
        </div>
        <div>
          <div style={{display:'flex'}}>
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => handleFormatChange('pdf')}>
              {selectedFormat === 'pdf' ? <CheckCircleIcon /> : <CheckIcon />}
              <span style={{ marginLeft: '8px' }}>PDF</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => handleFormatChange('excel')}>
              {selectedFormat === 'excel' ? <CheckCircleIcon /> : <CheckIcon />}
              <span style={{ marginLeft: '8px' }}>Excel</span>
            </div>
          </div>
          
        </div>
        <div style={{ position: 'absolute', bottom: '16px', right: '16px' }}>
  <Button
    variant="outlined"
    color="primary"
    onClick={handleClearClick}
    sx={{
      color: '#000000',
      borderColor: '#000000',
      marginRight: '8px',
      '&:hover': {
        borderColor: '#000000',
        color: '#000000',
      },
    }}
  >
    Clear
  </Button>
  <Button
    variant="contained"
    color="primary"
    onClick={handleApplyClick}
    disabled={!selectedFormat}
    sx={{
      color: '#FFFFFF',
      background: '#000000',
      '&:hover': {
        background: '#000000',
        color: '#FFFFFF',
      },
    }}
  >
    Apply
  </Button>
</div>

      </div>
    </Modal>
  );
};

export default ExportModal;
