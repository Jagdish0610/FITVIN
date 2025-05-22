import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Paper
} from "@mui/material";

const HomePage=()=> {
  return (
    <>
      {/* Navigation Bar */}
      <AppBar position="static" sx={{ backgroundColor: "#ff5a5f" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            FITVIN
          </Typography>
          <Button color="inherit">Sign Up</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          py: 8,
          textAlign: "center"
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Welcome to FITVIN
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            Your personal fitness journey begins here. Train smart, stay healthy, and track your progress with ease.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 3,
              backgroundColor: "#ff5a5f",
              "&:hover": { backgroundColor: "#e14e52" }
            }}
          >
            Get Started
          </Button>
        </Container>
      </Box>

      {/* PreRequisites / Features Section */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          What You’ll Need
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            "Active Email ID",
            "Mobile Number",
            "Fitness Goals",
            "Device with Internet",
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: "center",
                  borderRadius: 3,
                  backgroundColor: "#fff"
                }}
              >
                <Typography variant="h6" fontWeight="medium">
                  {item}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default HomePage;
