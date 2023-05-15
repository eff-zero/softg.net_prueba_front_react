import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';
import api from '../../../../api';
import useForm from '../../../../helpers/useForm';
import Input from '../../../../components/Input';
import { showToast } from '../../../../features/toast/toastSlice';
import { useState } from 'react';
import { toggleLoader } from '../../../../features/loader/loaderSlice';

function LoginPage() {
  const dispatch = useDispatch();
  const { handleChange, form } = useForm();
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    try {
      dispatch(toggleLoader());
      e.preventDefault();
      const response = await api().post('/login', form);
      const data = response?.data;
      data && dispatch(login(data));
    } catch (error) {
      const { data } = error.response;
      const validationErrors = data?.error;
      const message = data?.message;
      setErrors(validationErrors);
      message && dispatch(showToast({ message: data.message, color: '' }));
    } finally {
      dispatch(toggleLoader());
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='card shadow w-50'>
        <h3 className='card-header text-uppercase text-center py-3'>
          Inicio de Sesión
        </h3>
        <div className='card-body'>
          <form onSubmit={handleSubmit}>
            <Input
              label='Correo Eléctronico'
              type='email'
              id='email'
              placeholder=' '
              name='email'
              onChange={handleChange}
              error={errors}
            />

            <Input
              label='Contraseña'
              type='password'
              id='password'
              placeholder=' '
              name='password'
              onChange={handleChange}
              error={errors}
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
