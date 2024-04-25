import React from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function SendModalv2 ({ fileId, setUpdate, update }) {
  // const token = '0b93479c-996f-4aa5-b932-a30c5e8fe41d';
  const token = JSON.parse(localStorage.getItem('token'));
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [canSend, setCanSend] = React.useState(false);
  const setModalOpen = () => {
    setOpen(true)
  };
  const close = () => {
    setOpen(false);
  }
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
    setOpen(false)
    try {
      const response = await axios.post('http://localhost:3001/khats/sendMultiple', 
      { recipient: email, fileIds: [fileId] },
      {
        headers: {
          authorization: token 
        }
      });
      setUpdate(update + 1)
      console.log(response.data);
    } catch (err) {
      console.log('couldn\'t send the email')
    }
  }
  return (

    <div>
      <SendIcon onClick={setModalOpen} fontSize="large" style={{ paddingRight: 10 }} />
      <Modal
        open={open}
      >
        <Box className='modalStyle'>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Recipient
          </Typography>
          <hr color="#000"/>
          <TextField fullWidth id="presentation-name" label="Recipient email" variant="outlined" onChange={ (e) => handleSetEmail(e.target.value)} value={email}/>
          <br/>
          <Button style={{ marginTop: '10px' }}fullWidth disabled={!canSend} variant="contained" onClick={handleSubmit}>Send</Button>
          <Button style={{ marginTop: '10px' }}fullWidth variant="contained" onClick={close}>Cancel</Button>
        </Box>
      </Modal>
    </div>
  );
}
