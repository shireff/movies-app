// import React from 'react'

// export default function Footer() {
//   return (
//     <div>Footer</div>
//   )
// }


import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function GuestFooter() {
  return (
    // sx={{marginTop: 'calc(10% + 60px)', bottom: 0}}
    <Paper  component="footer" square variant="outlined">
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my:1
          }}
        >
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            Copyright ©2024. Shireff Nady Limited
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}