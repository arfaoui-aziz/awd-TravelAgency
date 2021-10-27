import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// material
import { Card, Link, Typography, Stack, Button, Rating } from '@mui/material';
import { queryApi } from '../utils/queryApi';

// utils

//

BookingCard.propTypes = {
  bookingItem: PropTypes.object,
  bokl: PropTypes.array
};

export default function BookingCard({ bookingItem, bokl }) {
  const { name, rating, imgUrl, price } = bookingItem;

  // eslint-disable-next-line eqeqeq
  const filtered = bokl.filter((item) => item.name !== name);

  const navigate = useNavigate();

  const handleDelete = async () => {
    const [res, error] = await queryApi(
      `${process.env.REACT_APP_BOOKING_SERVICE_API}/${filtered[0]._id}`,
      null,
      'DELETE'
    );
    if (error) {
      console.log(error);
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="BookingCard">
      <Card>
        <Stack direction="row" spacing={4} sx={{ p: 3 }}>
          <div className="BookingImg">
            <img alt="" src={imgUrl} />
          </div>

          <Stack spacing={2}>
            <Stack spacing={4} direction="row" alignItems="center" justifyContent="space-between">
              <Link
                to="#"
                color="inherit"
                underline="hover"
                overflow="hidden"
                component={RouterLink}
              >
                <Typography variant="h5" noWrap>
                  {name}
                </Typography>
              </Link>
              <Rating name="read-only" value={rating} readOnly size="medium" />
            </Stack>
            <Typography variant="caption">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam reiciendis
              dolore corrupti saepe nemo, at aut repellat rerum id ducimus non ut deleniti voluptas
              similique harum qui ipsam dignissimos!
            </Typography>
            <br />
            <br />
            <Stack spacing={3} direction="row" alignItems="center" justifyContent="end">
              <Typography variant="h6">
                <Typography component="span" variant="body1">
                  {/* {priceSale && fCurrency(priceSale)} */}
                  {price} DT
                </Typography>
                &nbsp;
                {/* {fCurrency(price)} */}
              </Typography>

              <Button
                // fullWidth
                size="medium"
                type="submit"
                variant="outlined"
                color="secondary"
                onClick={handleDelete}
                // onClick={openDialog}
              >
                Delete
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </div>
  );
}
