import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Link, Typography, Stack, Button, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { fCurrency } from '../../../utils/formatNumber';
//
import Label from '../../Label';

import BookingDialog from '../../BookingDialog';
import { queryApi } from '../../../utils/queryApi';

// ----------------------------------------------------------------------

const HotelImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'imgUrl',
  position: 'absolute'
});

// ----------------------------------------------------------------------

HotelCard.propTypes = {
  hotel: PropTypes.object
};

export default function HotelCard({ hotel }) {
  const [open, setOpen] = useState(false);
  const [toogle, setToogle] = useState(false);

  const handleToogle = () => {
    setToogle(!toogle);
  };

  const openDialog = () => {
    setOpen(true);
  };

  const {
    id,
    name,
    imgUrl,
    price,
    status = 'sale',
    rating,
    priceSale = price + price * Math.random()
  } = hotel;

  const closeDialog = async (val, fromDate, toDate) => {
    if (fromDate && toDate) {
      const [, error] = await queryApi(
        process.env.REACT_APP_BOOKING_SERVICE_API,
        {
          userID: '1',
          type: 'hotel',
          serviceID: id,
          bookingDate: new Date(),
          price,
          fromDate,
          toDate
        },
        'POST'
      );
    }
    setOpen(val);
  };

  return (
    <>
      <Card>
        <Box sx={{ pt: '60%', position: 'relative' }}>
          {status && (
            <Label
              variant="filled"
              color={(status === 'sale' && 'error') || 'info'}
              sx={{
                zIndex: 9,
                top: 16,
                right: 16,
                position: 'absolute',
                textTransform: 'uppercase'
              }}
            >
              {status}
            </Label>
          )}
          <HotelImgStyle alt={name} src={imgUrl} />
        </Box>

        <Stack spacing={2} sx={{ p: 3 }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Link to="#" color="inherit" underline="hover" overflow="hidden" component={RouterLink}>
              <Typography variant="subtitle1" noWrap>
                {name}
              </Typography>
            </Link>
            <Rating name="read-only" value={rating} readOnly size="small" />
          </Stack>
          <Typography variant="caption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam reiciendis
            dolore corrupti saepe nemo, at aut repellat rerum id ducimus non ut deleniti voluptas
            similique harum qui ipsam dignissimos!
          </Typography>
          <br />
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h6">
              <Typography
                component="span"
                variant="body1"
                sx={{
                  color: 'text.disabled',
                  textDecoration: 'line-through'
                }}
              >
                {priceSale && fCurrency(priceSale)}
              </Typography>
              &nbsp;
              {fCurrency(price)}
            </Typography>

            <Button
              // fullWidth
              size="medium"
              type="submit"
              variant="outlined"
              color="secondary"
              onClick={openDialog}
            >
              Book Now
            </Button>
          </Stack>
        </Stack>
      </Card>

      <BookingDialog open={open} dialogHandler={closeDialog} />
    </>
  );
}
