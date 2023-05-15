import { useDispatch } from 'react-redux';
import LoginTemplate from '../templates/LoginTemplate';
import { Button } from 'react-bootstrap';
import { showToast } from '../features/toast/toastSlice';
showToast

const Home = () => {
  const dispatch = useDispatch()
  return (
    <LoginTemplate>
      <Button variant='dark' onClick={() => dispatch(showToast({ message: 'hola'}))}>HOLA</Button>
      <h1> HOLA MUNDO </h1>
    </LoginTemplate>
  );
};

export default Home;
