import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';
import api from '../../../../api';
import useForm from '../../../../helpers/useForm';
import Input from '../../../../components/Input';

function LoginPage() {
  const dispatch = useDispatch();
  const { handleChange, form } = useForm();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await api().post('/login', form);
      const data = response?.data;
      data && dispatch(login(data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='card shadow w-50'>
        <div className='card-body'>
          <form onSubmit={handleSubmit}>
            <Input
              label='Correo Eléctronico'
              type='email'
              id='email'
              placeholder=' '
              name='email'
              onChange={handleChange}
            />

            <Input
              label='Contraseña'
              type='password'
              id='password'
              placeholder=' '
              name='password'
              onChange={handleChange}
            />

            <button className='btn btn-dark d-block mx-auto'>
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
