import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { LOGIN } from '../app/Modules/AuthModule/routes/route';

function PrivateRoutes() {
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to={LOGIN} />;
}

export default PrivateRoutes;
