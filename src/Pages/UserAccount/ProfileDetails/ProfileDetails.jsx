import React, { useRef } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChevronIcon from "../../../components/ChevronIconn/ChevronIcon";
import EditIcon from "@mui/icons-material/Edit";

const ProfileDetails = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleChevronClick = () => {
    navigate("/profile");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic
  };

  const handleEditIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        document.querySelector(".profile-picture").src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container maxWidth='xl' sx={{ textAlign: "center", paddingBottom: "2rem" }}>
      {/* Top Section */}
      <Box
        sx={{
          marginTop: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          cursor: "pointer",
          width: "100%",
          maxWidth: "1050px",
        }}
        onClick={handleChevronClick}
      >
        <ChevronIcon size='2rem' />
        <Typography variant='h6'>Profile Details</Typography>
      </Box>

      {/* Profile Picture Section */}
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            overflow: "hidden",
            padding: "2px",
            boxSizing: "border-box",
            boxShadow: "0px 5px 10px -5px rgba(0, 0, 0, 0.2)",
            marginTop: "3rem",
            "&:hover .profile-picture": {
              filter: "brightness(70%)",
            },
            "&:hover .overlay": {
              opacity: 1,
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              backgroundColor: "lightcoral",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          />
          <img
            src='bitmap.jpg'
            alt='User Profile'
            className='profile-picture'
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
              zIndex: 2,
              position: "relative",
            }}
          />
          <Box
            className='overlay'
            onClick={handleEditIconClick}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              opacity: 0,
              transition: "opacity 0.3s ease",
              zIndex: 3,
            }}
          >
            <EditIcon
              sx={{
                cursor: "pointer",
                color: "white",
                fontSize: "2rem",
              }}
            />
          </Box>
          <input
            type='file'
            ref={fileInputRef}
            style={{ display: "none" }}
            accept='image/*'
            onChange={handleFileChange}
          />
        </Box>
      </Box>

      {/* Form Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "3rem",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            maxWidth: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%", marginBottom: "2rem" }}>
            <Typography
              component='label'
              htmlFor='name'
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                marginBottom: "0.5rem",
              }}
            >
              Name
            </Typography>
            <TextField id='name' variant='outlined' fullWidth required />
          </Box>
          <Box sx={{ width: "100%", marginBottom: "2rem" }}>
            <Typography
              component='label'
              htmlFor='email'
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                marginBottom: "0.5rem",
              }}
            >
              Email
            </Typography>
            <TextField id='email' variant='outlined' fullWidth required />
          </Box>
          <Box sx={{ width: "100%", marginBottom: "2rem" }}>
            <Typography
              component='label'
              htmlFor='phone'
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                marginBottom: "0.5rem",
              }}
            >
              Phone Number
            </Typography>
            <TextField id='phone' variant='outlined' fullWidth required />
          </Box>
          <Button
            variant='contained'
            type='submit'
            sx={{
              backgroundColor: "#F6613F",
              height: "45px",
              width: "100%",
              "&:hover": {
                backgroundColor: "#D95436",
              },
            }}
          >
            Save
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ProfileDetails;
