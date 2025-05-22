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
import LockIcon from "@mui/icons-material/Lock";

const Login = () => {
  const [form, setForm] = useState({
    phone: "",
    password: "",
    remember: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent default form submission

    try {
      const response = await fetch("http://localhost:8000/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: form.phone,
          password: form.password
        })
      });

      const data = await response.json();
      if (response.ok) {
        // Redirect or save token as needed
        window.location.href = data.redirect_url || "/home"; // fallback URL
      } else {
        alert(data.error || "Invalid login");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1e1e1e",
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
            Login
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
            <FormControlLabel
              control={
                <Checkbox
                  checked={form.remember}
                  onChange={handleChange}
                  name="remember"
                  sx={{ color: "#ff5a5f" }}
                />
              }
              label="Remember me"
              sx={{ mt: 1 }}
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
              Login
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
