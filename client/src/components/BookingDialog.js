import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';

export default function BookingDialog({ open, dialogHandler }) {
  const [value, setValue] = useState(new Date('2021-10-27T21:11:54'));
  const [value2, setValue2] = useState(new Date('2021-10-27T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  const handleChange2 = (newValue2) => {
    setValue2(newValue2);
    console.log(newValue2);
  };
  const handleClose = () => {
    dialogHandler(false);
  };

  const handleConfirm = () => {
    console.log('confirm');
    dialogHandler(false, value, value2);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Confirm Booking</DialogTitle>
      <DialogContent>
        {/* <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        /> */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <br />
          <Stack spacing={3}>
            <DesktopDatePicker
              label="Depart Date"
              inputFormat="MM/dd/yyyy"
              fullWidth
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />

            <DesktopDatePicker
              label="Return Date"
              inputFormat="MM/dd/yyyy"
              fullWidth
              value={value2}
              onChange={handleChange2}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleConfirm}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
}
