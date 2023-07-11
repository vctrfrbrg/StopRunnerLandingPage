import { Box, Typography, Card, Button } from '@mui/material';

const Index = () => (
  <Card raised>
    <Box p={4} sx={{ alignItems: 'center'}}>
      <Typography variant='h2' gutterBottom>
        Stoprunner
      </Typography>

      <Typography variant='body1'>
        Welcome! We are building something lovely!
      </Typography>
    </Box>
  </Card>
);

export default Index;