import React, { useState, useRef } from 'react';

function Fileuploader({ onFileSelect }) {
  const [isDragActive, setIsDragActive] = useState(false);
  const fileInputRef = useRef(null);

  
  const onButtonClick = () => {
    fileInputRef.current.click();
  };

  
  const handleFiles = (files) => {
    if (files && files[0]) {
      console.log("Selected file:", files[0].name);
      if (onFileSelect) onFileSelect(files[0]);
    }
  };

  
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  return (
    <div 
      style={{
        ...styles.dropZone,
        borderColor: isDragActive ? '#38bdf8' : '#2563eb', // Shifts border color on hover
        background: isDragActive ? '#152033' : '#0f1724'
      }}
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
    >
      
      <input 
        ref={fileInputRef}
        type="file" 
        style={{ display: 'none' }} 
        accept=".pdf,.doc,.docx,.ppt,.pptx,.txt"
        onChange={handleChange}
      />

      
      <div style={styles.iconRow}>
        
        <div style={{ ...styles.badge, background: '#ef4444' }}>PDF</div>
        
        <div style={{ ...styles.badge, background: '#f97316' }}>PPT</div>
        
        <div style={{ ...styles.badge, background: '#2563eb' }}>Word</div>
        
        <div style={{ ...styles.badge, background: '#06b6d4' }}>TXT</div>
      </div>

      
      <p style={styles.mainText}>Upload or drag a file here.</p>
      <p style={styles.subText}>PDF, PPT, Word, TXT: max 50MB</p>
      
      <div style={styles.infoRow}>
        <span style={styles.infoText}>Supported file formats</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      </div>

      
      <button onClick={onButtonClick} style={styles.uploadButton}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 8 }}>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="17 8 12 3 7 8"></polyline>
          <line x1="12" y1="3" x2="12" y2="15"></line>
        </svg>
        Upload a File
      </button>
    </div>
  );
}

const styles = {
  dropZone: {
    width: '100%',
    maxWidth: '800px',
    padding: '40px 20px',
    borderRadius: '16px',
    border: '2px dotted #f9f9fa', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease-in-out',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    margin: '20px auto'
  },
  iconRow: {
    display: 'flex',
    gap: '12px',
    marginBottom: '20px'
  },
  badge: {
    width: '46px',
    height: '46px',
    borderRadius: '10px',
    color: '#ffffff',
    fontSize: '11px',
    fontWeight: '800',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2)',
    userSelect: 'none',
    borderBottomLeftRadius: '0px' // Subtle document fold styling
  },
  mainText: {
    color: '#e2e8f0',
    fontSize: '16px',
    fontWeight: '500',
    margin: '0 0 6px 0'
  },
  subText: {
    color: '#64748b',
    fontSize: '13px',
    margin: '0 0 10px 0'
  },
  infoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginBottom: '24px',
    cursor: 'pointer'
  },
  infoText: {
    color: '#475569',
    fontSize: '13px',
  },
  uploadButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#2563eb',
    color: '#ffffff',
    border: 'none',
    padding: '10px 24px',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.15s ease',
    boxShadow: '0 4px 10px rgba(37, 99, 235, 0.2)'
  }
};

export default Fileuploader;