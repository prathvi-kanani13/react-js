import React, { useState } from 'react';
import { Typography, Button, Box } from '@mui/material';
import CustomDialog from '../components/CustomDialog';

const About: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpen = () => setIsDialogOpen(true);
  const handleClose = () => setIsDialogOpen(false);

  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h4" gutterBottom>
        About Page
      </Typography>
      <Typography variant="body1" gutterBottom>
        This page demonstrates how to use a reusable dialog component.
      </Typography>

      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Dialog
      </Button>

      <CustomDialog
        open={isDialogOpen}
        onClose={handleClose}
        title="About Dialog"
        content="This is reusable CustomDialog displayed on the About Page using Material UI and TypeScript."
      />
    </Box>
  );
};

export default About;