import { Box, Typography, TextField, Button, FormControl, Snackbar, Slide } from '@mui/material';
import { useState } from 'react';

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export const ContactUs = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // await submitForm(email);

      setOpenSnackbar(true);
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <Box p={2} component="form" onSubmit={handleSubmit}>
      <Typography variant="h6">
        Signup for pre-release info about StopRunner
      </Typography>
      
      <Typography>
          By signing up you are okay with us sending you future information about StopRunner.
      </Typography>
      
      <FormControl fullWidth>
        <TextField 
          name="entry.1563724321" 
          label="Email" 
          type="email" 
          required
          disabled={isSubmitted}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mt: 2 }}
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          sx={{ mt: 2 }}
          disabled={isSubmitted}
        >
          Submit
        </Button>
      </FormControl>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        TransitionComponent={SlideTransition}
        message="Thanks for signing up! We'll contact you as soon as there is any news! 🏃"
      />
    </Box>
  );
};