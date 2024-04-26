import React from 'react'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import axios from 'axios';

// const testingfileId = "c577417e-66a1-41eb-b79b-02832183c4a5";
const RenderBtn = ({ fileId }) => {
  // const token = '3200931d-3953-4975-94c4-6093aa5f7775';
  const token = JSON.parse(localStorage.getItem('token'));

  const renderFile = async () => {
    console.log('trying to render')
    try {
      const response = await axios.post('https://khatsauthentication.alwaysdata.net/khats/renderInvoice',
        { fileId },
        {
          headers: {
            authorization: token
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
    <div style={{ padding: '10px' }}>
      <ReceiptOutlinedIcon onClick={() => { renderFile() }}/>
    </div>
  )
}

export default RenderBtn
