import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

function Item ({ addItem }) {
  const [itId, setItId] = useState('');
  const [unitPrice, setUnitPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [itemName, setItemName] = useState('');
  const [taxCategory, setTaxCategory] = useState('');

  const handleSubmitItem = e => {
    e.preventDefault();
    const newItem = {
      itId: itId,
      unitPrice: unitPrice,
      quantity: quantity,
      name: itemName,
      taxCategory: taxCategory
    };
    addItem(newItem);
    // Clear the form
    setItId('');
    setUnitPrice(0);
    setQuantity(0);
    setItemName('');
    setTaxCategory('');
  };

  return (
    <>
      <form onSubmit={handleSubmitItem}>
        <TextField
          required
          margin='normal'
          fullWidth
          label='Item Id'
          value={itId}
          onChange={e => setItId(e.target.value)} />
        <TextField
          required
          margin='normal'
          fullWidth
          label='Unit Prices'
          value={unitPrice}
          onChange={e => setUnitPrice(e.target.value)} />
        <TextField
          required
          margin='normal'
          fullWidth
          label='Quantity'
          value={quantity}
          onChange={e => setQuantity(e.target.value)} />
        <TextField
          required
          margin='normal'
          fullWidth
          label='Name'
          value={itemName}
          onChange={e => setItemName(e.target.value)} />
        <TextField
          required
          margin='normal'
          fullWidth
          label='Tax Category'
          value={taxCategory}
          onChange={e => setTaxCategory(e.target.value)} />
        <Button variant='primary' type="submit" style={{ display: 'flex', flex: 'start' }}>Add Item</Button>
        <br />
      </form>
    </>
  )
}

export default Item
