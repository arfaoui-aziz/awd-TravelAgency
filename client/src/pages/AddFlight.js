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

export default function AddFlight() {
  const navigate = useNavigate();
  const [flightData, setFlightData] = useState({
    flightNumber: '',
    flightFrom: '',
    flightTo: '',
    airlineCompany: '',
    companyImgUrl: '',
    flightDuration: '',
    flightDate: '',
    price: '',
    placesLeft: ''
  });

  const handleChange = (e) => {
    const input = e.target;
    setFlightData({ ...flightData, [input.id]: input.value });
    console.log(flightData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const [, error] = await queryApi(process.env.REACT_APP_FLIGHT_SERVICE_API, flightData, 'POST');

    if (error) {
      console.log(error);
    } else {
      navigate('/dashboard/flights');
    }
  };

  return (
    <Page title="AWD - Travel Agency | Add Flight">
      <Typography variant="h4" gutterBottom component="div" ml={2}>
        Add Flight
      </Typography>
      <Divider variant="middle" />
      <Container>
        <ContentStyle>
          <Box component="form" onSubmit={handleSubmit} onChange={handleChange}>
            <Stack spacing={3}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
                <TextField id="flightNumber" fullWidth label="Flight Number" />

                <TextField id="flightFrom" fullWidth label="Flight From" />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
                <TextField id="flightTo" fullWidth label="flightTo" />
                <TextField id="airlineCompany" fullWidth label="Airline Company" />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
                <TextField id="companyImgUrl" fullWidth label="Image" />
                <TextField id="flightDuration" fullWidth label="Flight Duration" />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                <TextField id="price" fullWidth label="Price" />
                <TextField id="placesLeft" fullWidth label="Places Left" />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                <TextField id="flightDate" fullWidth label="flightDate" />
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
                  Add Flight
                </LoadingButton>
              </Stack>
            </Stack>
          </Box>
        </ContentStyle>
      </Container>
    </Page>
  );
}
