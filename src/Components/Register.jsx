import { Button, Paper, TextField } from '@mui/material';
import axios from 'axios';
import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({ token, setToken }) => {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password2, setPassword2] = useState('');
  const [number, setNumber] = useState('');

  const navigate = useNavigate();

//   useEffect(() => {
//     if (token !== null) {
//       navigate('/dashboard');
//     }
//   }, [token, navigate]);

  const register = async () => {
    const isCustomer = false;
    console.log(typeof number)
    console.log(number.length)
    try {
      const response = await axios.post('http://localhost:3001/khats/auth/register', {
        nameFirst: firstName,
        nameLast: lastName,
        email: email,
        number: number,
        password1: password1,
        password2: password2,
        isCustomer: isCustomer
      });
      console.log(response)
      if (response.data.status === '400') {
        alert(response.data.error);
      } else {
        console.log(response.data.token);
        if (response.data.token === undefined) {
            alert("try again");
        } else {
            setToken(response.data.token);
        }
      }
    } catch (err) {
      alert(err.response.data.error);
    }
  }

  return (
    <>
      <div className={'d-flex justify-content-center align-items-center'} style={{ paddingTop: '8%' }}>
        <Paper sx={{ padding: '2%', width: '50%', height: '675px' }} align='center' id="page-login">
          <h1 className="h2 mb-3 fw-normal" style={{ color: 'green', fontFamily: 'Alice' }} > Register</h1>
          <TextField
            margin='normal'
            label="First Name"
            placeholder="First Name"
            fullWidth
            onChange={e => setFirstName(e.target.value)}
            required />
          <TextField
            margin='normal'
            label="Last Name"
            placeholder="Last Name"
            fullWidth
            onChange={e => setLastName(e.target.value)}
            required />
          <TextField
            margin='normal'
            type="email"
            label="Email"
            placeholder="Email address"
            fullWidth
            onChange={e => setEmail(e.target.value)}
            required />
          <TextField
            margin='normal'
            type="email"
            label="Number"
            placeholder="Number"
            fullWidth
            onChange={e => setNumber(e.target.value)}
            required />
          <TextField
            margin='normal'
            type="password"
            label="Password"
            placeholder="Password"
            onChange={e => setPassword1(e.target.value)}
            fullWidth
            required />
          <TextField
            margin='normal'
            type="password"
            label="Confirm Password"
            placeholder="Confirm Password"
            fullWidth
            onChange={e => setPassword2(e.target.value)}
            required />
          <br />
          <br />
          <p> Already have an account? <a href='#' onClick={() => navigate('/login')}> Login </a></p>
          <Button variant="contained" onClick={register} >Register</Button>
        </Paper>
      </div>
    </>
  )
}

export default Register
