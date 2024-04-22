import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectLoading } from '../../redux/contacts/slice';
import { modalClose, selectActionData } from '../../redux/modal/slice';

import Loader from '../Loader/Loader';

import css from './DeleteContact.module.css';

const DeleteContact = () => {
  const dispatch = useDispatch();
  const contact = useSelector(selectActionData);
  const contactLoading = useSelector(selectLoading);
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  const handleCancel = () => {
    dispatch(modalClose());
  };

  return (
    <>
      {contactLoading ? (
        <Loader />
      ) : (
        <div className={css.deleteModal}>
          <p>Are you sure you want to delete this contact?</p>
          <p>{contact.name}</p>
          <div className={css.buttonWrapper}>
            <button type="button" onClick={handleDelete}>
              Delete
            </button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteContact;
