import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Paper
} from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const SignUp=()=> {
  const [form, setForm] = useState({
    phone: "",
    fullName: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1e1e1e", // dark neutral background
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 4,
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={6}
          sx={{
            p: 4,
            borderRadius: 4,
            backgroundColor: "#ffffff",
          }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{
              color: "#ff5a5f",
              fontWeight: "bold",
              mb: 2,
              textTransform: "uppercase"
            }}
          >
            Registration
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              name="phone"
              label="Phone"
              value={form.phone}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIphoneIcon />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              fullWidth
              margin="normal"
              name="fullName"
              label="Full Name"
              value={form.fullName}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              fullWidth
              margin="normal"
              name="email"
              label="Email"
              value={form.email}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              fullWidth
              margin="normal"
              name="password"
              label="Password"
              type="password"
              value={form.password}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                )
              }}
            />
            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{
                mt: 3,
                backgroundColor: "#ff5a5f",
                fontWeight: "bold",
                borderRadius: 2,
                py: 1.5,
                fontSize: "1rem",
                textTransform: "none",
                "&:hover": { backgroundColor: "#e14e52" }
              }}
            >
              Register
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default SignUp;