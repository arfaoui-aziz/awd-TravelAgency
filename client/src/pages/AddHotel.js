import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, TextField, Stack, Divider } from '@mui/material';
// layouts
// components
import { LoadingButton } from '@mui/lab';

// import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Page from '../components/Page';
import { queryApi } from '../utils/queryApi';

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: '90%',
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  padding: theme.spacing(8, 0)
}));

export default function AddHotel() {
  const navigate = useNavigate();
  const [hotelData, setHotelData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    zipCode: '',
    imgUrl: '',
    price: '',
    roomsLeft: '',
    rating: ''
  });

  const handleChange = (e) => {
    const input = e.target;
    setHotelData({ ...hotelData, [input.id]: input.value });
    console.log(hotelData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const [, error] = await queryApi('api/hotels', hotelData, 'POST');

    if (error) {
      console.log(error);
    } else {
      navigate('/dashboard/hotels');
    }
  };

  return (
    <Page title="AWD - Travel Agency | Add Hotel">
      <Typography variant="h4" gutterBottom component="div" ml={2}>
        Add Hotel
      </Typography>
      <Divider variant="middle" />
      <Container>
        <ContentStyle>
          <Box component="form" onSubmit={handleSubmit} onChange={handleChange}>
            <Stack spacing={3}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
                <TextField id="name" fullWidth label="Hotel Name" />

                <TextField
                  id="email"
                  fullWidth
                  autoComplete="username"
                  type="email"
                  label="Email address"
                />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
                <TextField id="phoneNumber" fullWidth label="Phone Number" />
                <TextField id="address" fullWidth label="Hotel Address" />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
                <TextField id="city" fullWidth label="City" />
                <TextField id="zipCode" fullWidth label="Zip Code" />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                <TextField id="price" fullWidth label="Price" />
                <TextField id="roomsLeft" fullWidth label="Available Rooms" />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                <TextField id="imgUrl" fullWidth label="Image Url" />
                <TextField id="rating" fullWidth label="Available Rooms" />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} />

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
                <LoadingButton
                  // fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  // loading={isSubmitting}
                >
                  Add Hotel
                </LoadingButton>
              </Stack>
            </Stack>
          </Box>
        </ContentStyle>
      </Container>
    </Page>
  );
}
