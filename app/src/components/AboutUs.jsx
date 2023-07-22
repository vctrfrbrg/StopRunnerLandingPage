import { Box, Grid, Typography, Avatar } from '@mui/material';

const gridItemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
}

const avatarSize = "100px";

export const AboutUs = () => {
  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} center>
        <Box style={gridItemStyle}>
            <Avatar alt="Benjamin Fischer" sx={theme => ({
                width: avatarSize, 
                height: avatarSize,
                marginBottom: "20px"
            })}  />
            <Typography variant="h6">Benjamin Fischer</Typography>
            <Typography variant="subtitle1">Lead game developer</Typography>
            <Typography variant="body1">
                With broad experience from gaming, deep-tech, architecture solutions and web technology, Benjamin leads the core game development in Unity.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Box style={gridItemStyle}>
            <Avatar alt="Victor Friberg" sx={theme => ({
                width: avatarSize, 
                height: avatarSize,
                marginBottom: "20px"
            })}  />
            <Typography variant="h6">Victor Friberg</Typography>
            <Typography variant="subtitle1">Lead solutions developer</Typography>
            <Typography variant="body1">
                As an experienced web developer, entreprenour and no-code-builder, Victor handles multiplayer and web.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};