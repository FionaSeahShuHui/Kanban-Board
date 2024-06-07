import React from "react";

import axios from "axios";

import {
  Card,
  Button,
  TextField,
  IconButton,
  Stack,
  Box,
  InputAdornment,
} from "@mui/material";

import { Person, Visibility, Https, VisibilityOff } from "@mui/icons-material";

import "../assets/styles/login.css";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box class="boxClass">
      <Card class="cardClass" variant="outlined">
        <Stack spacing={2}>
          <h1>Flounderland</h1>
          <TextField
            autoFocus
            id="username"
            label="Username"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Https />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    id="passwordVisibilityButton"
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button onClick={fetchData} variant="contained">
            Submit
          </Button>
        </Stack>
      </Card>
    </Box>
  );
}
