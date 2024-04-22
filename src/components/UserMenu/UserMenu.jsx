import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from '../../redux/auth/slice';
import { modalOpen } from '../../redux/modal/slice';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const handleClick = () => {
    dispatch(modalOpen({ actionType: 'LogOutModal' }));
  };

  return (
    <div className={css.userMenu}>
      <p>{`Welcome, ${userName}!`}</p>
      <button type="button" onClick={handleClick}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
