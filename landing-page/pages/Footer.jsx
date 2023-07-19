import { Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
}));

export const Footer = () => {
  return (
    <StyledBox p={2}>
      © 2023 StopRunner. All rights reserved.
    </StyledBox>
  );
};
