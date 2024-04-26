import { Paper } from '@mui/material';
import React from 'react';
import NavbarInside from "./NavbarInside";
import axios from 'axios';

const Work = ({ token, setToken }) => {
  // const token1 = JSON.parse(localStorage.getItem('token'));
  const [file, setFile] = React.useState(null);

  const handleSubmit = async () => {
    validateInvocie()
  }
  const validateInvocie = async () => {
    const formData = new FormData();
    formData.append('file', file);
    console.log('trying to validate')
    try {
      const response = await axios.post('https://khatsauthentication.alwaysdata.net/khats/validateInvoice',
        formData,
        {
          headers: {
            authorization: JSON.parse(localStorage.getItem('token'))
          }
        }
      );
      console.log(response.data)
      const url = response.data.url;
      window.open(url, '_blank');
      
    } catch (err) {
      console.log(err.response && err.response.data.error ? err.response.data.error : 'Failed to login');
    }
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
