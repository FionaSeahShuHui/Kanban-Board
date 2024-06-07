import React from "react";

import { Card, Button, TextField, IconButton, Stack, Box } from "@mui/material";

import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { RiLockPasswordFill } from "@react-icons/all-files/ri/RiLockPasswordFill";
// import { MdOutlineVisibility } from "@react-icons/all-files/md/MdOutlineVisibility";
// import { MdOutlineVisibilityOff } from "@react-icons/all-files/md/MdOutlineVisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";

// import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

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
              startAdornment: <FaUser />,
            }}
          />
          <TextField
            id="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <RiLockPasswordFill />
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

          <Button variant="contained">Submit</Button>
        </Stack>
      </Card>
    </Box>
  );
}
