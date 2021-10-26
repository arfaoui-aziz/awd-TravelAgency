import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Typography } from '@mui/material';
import AccountPopover from './dashboard/AccountPopover';

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

export default function Navbar() {
  return (
    <div className="home__navbar">
      <img src="/static/logo.png" width={80} height={80} alt="Logo" className="LOGO" />
      <ul className="nav__list">
        <li className="nav__list__item">
          <Link to="/home">
            {getIcon('ant-design:home-filled')}
            <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
              Home
            </Typography>
          </Link>
        </li>
        <li className="nav__list__item">
          <Link to="/home">
            {getIcon('vaadin:flight-takeoff')}
            <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
              Flight
            </Typography>
          </Link>
        </li>
        <li className="nav__list__item">
          <Link to="/home">
            {getIcon('fa-solid:hotel')}
            <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
              Hotel
            </Typography>
          </Link>
        </li>
        <li className="nav__list__item">
          <Link to="/home">
            {getIcon('icon-park-outline:tour-bus')}
            <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
              Excursion
            </Typography>
          </Link>
        </li>
        <AccountPopover />
      </ul>
    </div>
  );
}
