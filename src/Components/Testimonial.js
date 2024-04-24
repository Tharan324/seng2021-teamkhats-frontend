import { Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import React from 'react';
import NavbarInside from "./NavbarInside";

const Testimonial = ({ token, setToken }) => {
  const token1 = '0b93479c-996f-4aa5-b932-a30c5e8fe41d';
  const [email, setEmail] = React.useState('');
  const [canSend, setCanSend] = React.useState(false);
  const [file, setFile] = React.useState(null);

  const handleSetEmail = (newEmail) => {
    setCanSend(validateEmail(email))
    setEmail(newEmail)
  }
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleSubmit = async () => {
    if (!canSend) {
      alert("invalid email")
    } else if (!file) {
      alert("file incorrect");
    } else {
      try {
        const response = await axios.post('http://localhost:3001/khats/sendMultiple',
          { recipient: email, file },
          {
            headers: {
              authorization: token1
            }
          });
        console.log(response);
      } catch (err) {
        console.log('couldnt send the email')
      }
    }
  }
  return (
    <>
      <NavbarInside token={token} setToken={setToken} />
      <div>
        <Paper sx={{ padding: '2%'}} align='center'>
          <h1> Send Invoice </h1>
          <TextField
            fullWidth
            id="presentation-name"
            label="Recipient email"
            variant="outlined"
            onChange={(e) => handleSetEmail(e.target.value)}
            value={email}
            margin='normal' />
          <br />
          <br />
          <input
            accept=".xml"
            id="file-upload"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <br />
          <br />
          <button className="primary-button" onClick={handleSubmit}>Send</button>
        </Paper>
      </div>
    </>
  );
};

export default Testimonial;
