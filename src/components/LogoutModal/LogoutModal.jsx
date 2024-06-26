import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectAuthLoading } from '../../redux/auth/selectors';
import { modalClose } from '../../redux/modal/slice';
import Loader from '../Loader/Loader';
import css from './LogoutModal.module.css';

const LogoutModal = () => {
  const dispatch = useDispatch();
  const authLoading = useSelector(selectAuthLoading);
  const handleDelete = () => {
    dispatch(logout());
  };
  const handleCancel = () => {
    dispatch(modalClose());
  };

  return (
    <>
      {authLoading ? (
        <Loader />
      ) : (
        <>
          <p className={css.logoutTitle}>Are you sure you want to log out?</p>
          <div className={css.buttonWrapper}>
            <button type="button" onClick={handleDelete}>
              Log Out
            </button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default LogoutModal;
