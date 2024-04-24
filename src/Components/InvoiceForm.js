import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from './ItemForm';

function InvoiceForm ({ token }) {
  const [customerId, setCustomerId] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerCity, setCustomerCity] = useState('');
  const [customerPostCode, setCustomerPostCode] = useState('');
  const [customerState, setCustomerState] = useState('');
  const [customerStreetAdd, setCustomerStreetAdd] = useState('');
  const [customerContactName, setCustomerContactName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [sellerId, setSellerId] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [sellerCity, setSellerCity] = useState('');
  const [sellerPostCode, setSellerPostCode] = useState('');
  const [sellerState, setSellerState] = useState('');
  const [sellerStreetAdd, setSellerStreetAdd] = useState('');
  const [invoiceId, setInvoiceId] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [invoiceBuyerRef, setInvoiceBuyerRef] = useState('');
  const [paymentPid, setPaymentPid] = useState('');
  const [paymentFinancialAccId, setPaymentFinancialAccId] = useState('');
  const [paymentAccName, setPaymentAccName] = useState('');
  const [paymentBsb, setPaymentBsb] = useState('');
  const [allItems, setAllItems] = useState([]);
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();

  const addItem = (newItem) => {
    setAllItems(prevItems => {
      const newItems = [...prevItems, newItem];
      return newItems
    });
  };

  const handleSubmit = e => {
    console.log('submite');
    e.preventDefault();
    const formData = {
      customer: {
        id: customerId,
        name: customerName,
        address: {
          city: customerCity,
          postCode: customerPostCode,
          state: customerState,
          streetAdd: customerStreetAdd
        },
        contact: {
          name: customerContactName,
          phone: customerPhone,
          email: customerEmail
        }
      },
      seller: {
        id: sellerId,
        name: sellerName,
        address: {
          city: sellerCity,
          postCode: sellerPostCode,
          state: sellerState,
          streetAdd: sellerStreetAdd
        }
      },
      invoice: {
        inId: invoiceId,
        date: invoiceDate,
        buyerRef: invoiceBuyerRef,
        payment: {
          pid: paymentPid,
          financialAccId: paymentFinancialAccId,
          accName: paymentAccName,
          bsb: paymentBsb
        }
      },
      item: allItems
    };

    const createInvoice = async () => {
      console.log(token);
      try {
        // http://khatsauthentication.alwaysdata.net/
        await axios.post('http://localhost:3001/khats/createInvoice', {
          headers: {
            authorization: token // Set Authorization header with token
          }
        }, formData);
        navigate('/sales')
      } catch (err) {
        alert(err)
      }
    }
    createInvoice();
  };

  const handlePrevPage = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  // move to next page
  const handleNextPage = () => {
    if (index < allItems.length) {
      setIndex(index + 1);
    }
  };

  return (
    <>
      <div className='d-flex justify-content-center align-items-center'>
        <Paper sx={{ width: '80%', padding: '5%' }}>
          <Grid align='center'>
            <form onSubmit={handleSubmit}>
              <h1> Invoice Creation </h1>
              <h2>Customer Details</h2>
              <TextField
                value={customerId}
                onChange={e => setCustomerId(e.target.value)}
                margin='normal'
                required
                fullWidth
                label='Customer ID'
              />
              <TextField
                value={customerName}
                onChange={e => setCustomerName(e.target.value)}
                margin='normal'
                required
                fullWidth
                label='Name'
              />
              <TextField
                value={customerCity}
                onChange={e => setCustomerCity(e.target.value)}
                margin='normal'
                required
                fullWidth
                label='City'
              />
              <TextField
                value={customerPostCode}
                onChange={e => setCustomerPostCode(e.target.value)}
                margin='normal'
                required
                fullWidth
                label='Post Code'
              />
              <TextField
                value={customerState}
                onChange={e => setCustomerState(e.target.value)}
                margin='normal'
                required
                fullWidth
                label='State'
              />
              <TextField
                value={customerStreetAdd}
                onChange={e => setCustomerStreetAdd(e.target.value)}
                margin='normal'
                required
                fullWidth
                label='Street Address'
              />
              <TextField
                value={customerContactName}
                onChange={e => setCustomerContactName(e.target.value)}
                margin='normal'
                required
                fullWidth
                label='Contact Name' />
              <TextField
                value={customerPhone}
                onChange={e => setCustomerPhone(e.target.value)}
                margin='normal'
                required
                fullWidth
                label='Phone' />
              <TextField
                value={customerEmail}
                onChange={e => setCustomerEmail(e.target.value)}
                margin='normal'
                required
                fullWidth
                label='Email' />

              <h2>Seller Details</h2>
              <TextField
                value={sellerId}
                onChange={e => setSellerId(e.target.value)}
                margin='normal'
                required
                fullWidth
                label='Seller ID' />
              <TextField
                value={sellerName}
                onChange={e => setSellerName(e.target.value)}
                margin='normal'
                required
                fullWidth
                label='Name' />
              <TextField
                value={sellerCity}
                onChange={e => setSellerCity(e.target.value)}
                margin='normal'
                required
                fullWidth
                label='City' />
              <TextField
                value={sellerPostCode}
                onChange={e => setSellerPostCode(e.target.value)}
                margin='normal'
                required
                fullWidth
                label='Post Code' />
              <TextField
                value={sellerState}
                onChange={e => setSellerState(e.target.value)}
                margin='normal'
                required
                fullWidth
                label='State' />
              <TextField
                value={sellerStreetAdd}
                onChange={e => setSellerStreetAdd(e.target.value)}
                margin='normal'
                required
                fullWidth
                label='Street Address:' />

              <h2>Invoice Details</h2>
              <TextField
                value={invoiceId}
                onChange={e => setInvoiceId(e.target.value)}
                margin='normal'
                required
                fullWidth
                label='Invoice ID:' />
              <TextField
                value={invoiceDate}
                onChange={e => setInvoiceDate(e.target.value)}
                margin='normal'
                required
                fullWidth
                label='Date:' />
              <TextField
                value={invoiceBuyerRef}
                onChange={e => setInvoiceBuyerRef(e.target.value)}
                margin='normal'
                required
                fullWidth
                label='Buyer Reference'
              />
              <h3>Payment Details</h3>
              <TextField
                value={paymentPid}
                onChange={e => setPaymentPid(e.target.value)}
                margin='normal'
                required
                fullWidth
                label='Payment ID:'
              />
              <TextField
                value={paymentFinancialAccId}
                onChange={e => setPaymentFinancialAccId(e.target.value)}
                margin='normal'
                required
                fullWidth
                label='Financial Account ID:'
              />
              <TextField
                value={paymentAccName}
                onChange={e => setPaymentAccName(e.target.value)}
                margin='normal'
                required
                fullWidth
                label='Payment Acc Name:'
              />
              <TextField
                value={paymentBsb}
                onChange={e => setPaymentBsb(e.target.value)}
                margin='normal'
                required
                fullWidth
                label='Payment Bsb:'
              />
            </form>
            <h2> Invoice Items </h2>
            <div>
              {allItems.length > 0 &&
                <>
                  <div>
                    <p>Item {index + 1}</p>
                    <p>ID: {allItems[index]?.itId}</p>
                    <p>Unit Price: {allItems[index]?.unitPrice}</p>
                    <p>Quantity: {allItems[index]?.quantity}</p>
                    <p>Name: {allItems[index]?.name}</p>
                    <p>Tax Category: {allItems[index]?.taxCategory}</p>
                  </div>
                </>
              }
              {index > 0 &&
                <Button size='sm' variant="outline-secondary" onClick={() => handlePrevPage()}>&#8592;</Button>}
              {index < allItems.length - 1 &&
                <Button size='sm' variant="outline-secondary" onClick={() => handleNextPage()}>&#8594;</Button>
              }
              <Item addItem={addItem} />
            </div>
            <Button variant="primary" onClick={handleSubmit}> submit </Button>
          </Grid>
        </Paper>
      </div>
    </>
  )
}

export default InvoiceForm
