import { useState } from 'react';

import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, TextField, Stack, Divider } from '@mui/material';
// layouts
// components
import { LoadingButton } from '@mui/lab';

// import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Page from '../components/Page';

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: '90%',
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  padding: theme.spacing(8, 0)
}));

export default function AddHotel() {
  const handleSubmit = () => {};

  return (
    <Page title="AWD - Travel Agency | Add Hotel">
      <Typography variant="h4" gutterBottom component="div" ml={2}>
        Add Hotel
      </Typography>
      <Divider variant="middle" />
      <Container>
        <ContentStyle>
          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
                <TextField fullWidth label="Hotel Name" />

                <TextField fullWidth autoComplete="username" type="email" label="Email address" />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
                <TextField fullWidth label="Phone Number" />
                <TextField fullWidth label="Hotel Address" />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
                <TextField fullWidth label="City" />
                <TextField fullWidth label="Zip Code" />
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                <TextField fullWidth label="Image Url" />

                <TextField fullWidth label="Price" />
                <TextField fullWidth label="Available Rooms" />
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

                <LoadingButton
                  // fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  // loading={isSubmitting}
                >
                  Update Hotel
                </LoadingButton>
              </Stack>
            </Stack>
          </Box>
        </ContentStyle>
      </Container>
    </Page>
  );
}
