import { Box, Typography } from '@mui/material';

export const AboutTheGame = () => {
  return (
    <Box p={2} display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="720px">
      {/* <img 
        src="/path/to/your/image.jpg" 
        alt="Your game image" 
        style={{ width: 200, height: 100, objectFit: 'cover' }}
      /> */}
      <Typography variant="h6" align="center">
        You run, you stop, you win!
      </Typography>
      <Typography variant="body1" align="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </Box>
  );
};
