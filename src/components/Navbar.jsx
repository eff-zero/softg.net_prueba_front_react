import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../app/Modules/AuthModule/features/authSlice';
import logoJS from '/logo-js.png';
import authServices from '../app/Modules/AuthModule/services/services';

function Navbar() {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);

  const handleLogout = async () => {
    try {
      const response = await authServices().logout();
      console.log(response)
      response.status === 200 && dispatch(logout());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className='container-fluid shadow bg-primary mb-5'>
      <div className='container d-flex justify-content-between align-items-center py-3'>
        <Link to={'/'}>
          <img
            src={logoJS}
            alt=''
            className='rounded logo react'
            style={{ width: '4rem' }}
          />
        </Link>

        <div className='dropdown'>
          <button
            className='btn btn-dark dropdown-toggle'
            type='button'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            <span className='me-2'>{`${user.first_name} ${user.last_name}`}</span>
          </button>
          <ul className='dropdown-menu'>
            <li>
              <a className='dropdown-item' onClick={handleLogout}>
                Cerrar Sesión
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
