import React, { useState } from 'react';
import Fileuploader from './pdfcontainer';
import Questionbar from './question-bar';

function UploadSection() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const handleUploadedFile = async (file) => {
    setUploadedFile(file);
    setError('');
    console.log('sending file to the server');
    const formData = new FormData();
    formData.append("File", file);
    try {
      const response = await fetch("", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Failed to upload the document.");
      }
      await response.json();
      alert('Success!');
    } catch (error) {
      console.error("Connection Error:", error);
      alert('Could not connect to the backend server.');
    }
  };

  const handleSearch = (searchValue) => {
    if (!uploadedFile) {
      setError('Please upload a file before searching.');
      return;
    }
    if (!searchValue.trim()) {
      setError('Type something to search for.');
      return;
    }
    setError('');
    console.log('Searching for:', searchValue, 'in file:', uploadedFile.name);
  };

  return (
    <>
      <Fileuploader onFileSelect={handleUploadedFile}/>
      <Questionbar value={query} onChange={setQuery} onSearch={handleSearch}/>  
      {error && <p style={styles.errorText}>{error}</p>}
    </>
  );
}

const styles = {
  errorText: {
    color: '#ef4444',
    fontSize: 14,
  }
};

export default UploadSection;