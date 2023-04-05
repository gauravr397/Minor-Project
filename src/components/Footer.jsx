import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: "#323030",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" color="#FFFFFF">
            Crowdfunding platform .
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
