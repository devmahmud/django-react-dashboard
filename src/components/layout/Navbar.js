import { useSelector, useDispatch } from 'react-redux';
import { Menu, Avatar } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logout } from '../../redux/authSlice';

import Logo from '../../assets/images/logo.png';

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Successfully Logged out.');
  };

  return (
    <Menu
      mode="horizontal"
      style={{ padding: '0 3vw' }}
      selectedKeys={[history.location.pathname]}
    >
      <Menu.Item to="/dashboard/" key="home" disabled>
        <img src={Logo} alt="DC" className="logo menu-item" />
      </Menu.Item>
      <Menu.Item key="/dashboard">
        <Link to="/dashboard">Dashboard</Link>
      </Menu.Item>

      <Menu.Item key="logout" style={{ float: 'right' }} onClick={handleLogout}>
        <Avatar size="small">{user?.username?.charAt(0)?.toUpperCase()}</Avatar>{' '}
        Logout
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
