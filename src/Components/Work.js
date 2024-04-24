import { Paper } from '@mui/material';
import React from 'react';
import NavbarInside from "./NavbarInside";

const Work = ({ token, setToken }) => {
  const token1 = '0b93479c-996f-4aa5-b932-a30c5e8fe41d';
  const [file, setFile] = React.useState(null);

  const handleSubmit = async () => {
    console.log('validate');
  }
  return (
    <>
      <NavbarInside token={token} setToken={setToken} />
      <div>
        <Paper sx={{ padding: '2%' }} align='center'>
          <h1> Validate Invoice </h1>
          <br />
          <input
            accept=".xml"
            id="file-upload"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <br />
          <br />
          <button className="primary-button" onClick={handleSubmit}>Validate</button>
        </Paper>
      </div>
    </>
  );
};

export default Work;
