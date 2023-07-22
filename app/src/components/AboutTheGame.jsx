import { Box, Typography } from '@mui/material';

export const AboutTheGame = () => {
  return (
    <Box p={2} display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="720px">
      <Typography variant="h6" align="center">
        You run, you stop, you win!
      </Typography>
      <Typography variant="body1" align="center">
        An infinity runner, in finite space - Be fast, first, and flamboyant in this unique head-to-head puzzle race game! 
      </Typography>
    </Box>
  );
};
