import React, { useState } from 'react';

const containerStyle = {
  maxWidth: '350px',
  background: 'linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(244, 247, 251) 100%)',
  borderRadius: '40px',
  padding: '25px 35px',
  border: '5px solid rgb(255, 255, 255)',
  boxShadow: 'rgba(133, 189, 215, 0.878) 0px 31px 30px -20px',
  margin: '20px auto'
};

const headingStyle = {
  textAlign: 'center',
  fontWeight: 899,
  fontSize: '30px',
  color: '#24b477'
};

const formStyle = {
  marginTop: '20px'
};

const inputStyle = {
  width: '100%',
  background: 'white',
  border: 'none',
  padding: '14px 19px',
  borderRadius: '20px',
  marginTop: '14px',
  boxShadow: '#cff0ff 0px 10px 10px -5px',
  borderInline: '3px solid transparent',
  outline: 'none'
};

const forgotPasswordStyle = {
  display: 'block',
  marginTop: '11px',
  marginLeft: '11px',
  fontSize: '12px',
  color: '#24b477',
  textDecoration: 'none'
};

const buttonStyle = {
  display: 'block',
  width: '100%',
  fontWeight: 'bold',
  background: '#24b477',
  color: 'white',
  padding: '16px 0',
  margin: '21px auto',
  borderRadius: '21px',
  boxShadow: 'rgba(133, 189, 215, 0.878) 0px 20px 10px -15px',
  border: 'none',
  cursor: 'pointer',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out'
};

const agreementStyle = {
  display: 'block',
  textAlign: 'center',
  marginTop: '10px',
  fontSize: '12px'
};

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with', formData);
  };

  return (
    <div style={containerStyle}>
      <div style={headingStyle}>Sign In</div>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          required
          style={inputStyle}
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          required
          style={inputStyle}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <span style={{ marginLeft: '10px', display: 'block', marginTop: '10px' }}>
          <a href="#" style={forgotPasswordStyle}>Forgot Password ?</a>
        </span>
        <input
          type="submit"
          value="Sign In"
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.03)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'}
          onMouseUp={(e) => e.target.style.transform = 'scale(1.03)'}
        />
      </form>
      
    </div>
  );
};

export default Login;
