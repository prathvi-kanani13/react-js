import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = (): boolean => {
    let tempErrors: Partial<FormData> = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert(`Form submitted:\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        margin: '0 auto',
        padding: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        border: '1px solid #ccc',
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Contact Form
      </Typography>

      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        fullWidth
      />

      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        fullWidth
      />

      <TextField
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={!!errors.message}
        helperText={errors.message}
        fullWidth
        multiline
        rows={4}
      />

      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </Box>
  );
};

export default ContactForm;