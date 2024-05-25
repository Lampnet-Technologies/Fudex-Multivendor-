import React from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Typography, Box, Button } from "@mui/material";
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
       

             {/* wallet balance Section */}
             <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                gap: '2rem',
                
                }}>
                <Typography variant='h6' >Wallet Balance</Typography>
                <Button
                variant='contained'
                type='submit'
                sx={{
                backgroundColor: "#F6613F",
                height: "45px",
                
                "&:hover": {
                    backgroundColor: "#D95436",
                },
                }}
                >
                Fund Wallet
                </Button>
            </Box>
        </Box>
   </Container>
  )
}

export default AllTransactionHistory