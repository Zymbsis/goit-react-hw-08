import { useDispatch } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { modalClose } from '../../redux/modal/slice';
import clsx from 'clsx';
import css from './AuthNav.module.css';

const getNavLinkClass = ({ isActive }) =>
  clsx(css.navLink, { [css.navActive]: isActive });

const AuthNav = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(modalClose());
  };

  return (
    <nav className={css.navigation}>
      <NavLink className={getNavLinkClass} to="/register" onClick={handleClick}>
        Register
      </NavLink>
      <NavLink className={getNavLinkClass} to="/login" onClick={handleClick}>
        Log In
      </NavLink>
      <Outlet />
    </nav>
  );
};

export default AuthNav;
