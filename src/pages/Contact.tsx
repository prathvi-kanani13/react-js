import React from 'react';
import ContactForm from '../components/ContactForm';
import { Typography } from '@mui/material';

const Contact: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <ContactForm />
    </div>
  );
};

export default Contact;
