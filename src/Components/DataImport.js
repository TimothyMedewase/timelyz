import React, { useState } from 'react';

const DataImport = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      // Perform any necessary validation or data processing
      // before passing the file to the parent component.
      onUpload(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Data</button>
    </div>
  );
};

export default DataImport;
