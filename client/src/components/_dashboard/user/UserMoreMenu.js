import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
import editFill from '@iconify/icons-eva/edit-fill';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import trash2Outline from '@iconify/icons-eva/trash-2-outline';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
// material
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';
import { queryApi } from '../../../utils/queryApi';

// ----------------------------------------------------------------------

export default function UserMoreMenu({ hID, flight, hotel, excursion }) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    let ServiceApi = '';
    if (hotel) {
      ServiceApi = process.env.REACT_APP_HOTEL_SERVICE_API;
    } else if (flight) {
      ServiceApi = process.env.REACT_APP_FLIGHT_SERVICE_API;
    } else if (excursion) {
      ServiceApi = process.env.REACT_APP_EXCURSION_SERVICE_API;
    }
    const [res, error] = await queryApi(`${ServiceApi}/${hID}`, null, 'DELETE');
    console.log(e);
    if (error) {
      console.log(error);
    } else {
      console.log(res);
      window.location.reload();
    }
  };

  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Icon icon={moreVerticalFill} width={20} height={20} />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' }
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem sx={{ color: 'text.secondary' }} onClick={handleClick}>
          <ListItemIcon>
            <Icon icon={trash2Outline} width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Delete" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>

        <MenuItem component={RouterLink} to="#" sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Icon icon={editFill} width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Edit" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>
      </Menu>
    </>
  );
}
