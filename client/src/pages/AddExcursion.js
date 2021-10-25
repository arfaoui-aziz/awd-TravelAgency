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

export default function AddExcursion() {
  const navigate = useNavigate();
  const [excursionData, setExcursionData] = useState({
    title: '',
    destination: '',
    duration: '',
    airlineCompany: '',
    price: '',
    placesLeft: ''
  });

  const handleChange = (e) => {
    const input = e.target;
    setExcursionData({ ...excursionData, [input.id]: input.value });
    console.log(excursionData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const [, error] = await queryApi(
      process.env.REACT_APP_EXCURSION_SERVICE_API,
      excursionData,
      'POST'
    );

    if (error) {
      console.log(error);
    } else {
      navigate('/dashboard/excursions');
    }
  };

  return (
    <Page title="AWD - Travel Agency | Add Excursion">
      <Typography variant="h4" gutterBottom component="div" ml={2}>
        Add Excursion
      </Typography>
      <Divider variant="middle" />
      <Container>
        <ContentStyle>
          <Box component="form" onSubmit={handleSubmit} onChange={handleChange}>
            <Stack spacing={3}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
                <TextField id="title" fullWidth label="Excursion Title" />

                <TextField id="destination" fullWidth label="Destination" />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
                <TextField id="duration" fullWidth label="Duration" />
                <TextField id="imgUrl" fullWidth label="Image" />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                <TextField id="price" fullWidth label="Price" />
                <TextField id="placesLeft" fullWidth label="Places Left" />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                <TextField id="description" fullWidth label="Description" />
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
                  Add Excursion
                </LoadingButton>
              </Stack>
            </Stack>
          </Box>
        </ContentStyle>
      </Container>
    </Page>
  );
}
