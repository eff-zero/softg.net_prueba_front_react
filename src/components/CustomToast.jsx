import { Toast, ToastContainer } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { hiddenToast } from '../features/toast/toastSlice';

const CustomToast = () => {
  const dispatch = useDispatch();

  const show = useSelector((store) => store.toast.show);
  const message = useSelector((store) => store.toast.message);

  return (
    <ToastContainer style={{ top: 110, right: 10 }}>
      <Toast onClose={() => dispatch(hiddenToast())} show={show} bg='' delay={3000} autohide>
        <Toast.Header>
          <strong className='me-auto'>Mensaje</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default CustomToast;
