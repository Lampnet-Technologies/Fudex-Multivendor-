import React from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";
import ChevronIcon from "../../../components/ChevronIconn/ChevronIcon";


const AllTransactionHistory = () => {
    const navigate = useNavigate();

    const handleChevronClick = () => {
        navigate("/profile");
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
   </Container>
  )
}

export default AllTransactionHistory