import { Box, Container, Typography } from '@mui/material';

const Index = () => (
  <Container maxWidth="sm">
    <Box sx={{ alignItems: 'center'}}>
      <Typography variant='h1' component='h1' gutterBottom>
        Stoprunner
      </Typography>

      <Typography variant='body1'>
        Welcome! We are building something lovely!
      </Typography>
    </Box>
  </Container>
);

export default Index;