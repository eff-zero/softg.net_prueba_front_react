import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function PublicRoutes() {
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  return !isAuthenticated ? <Outlet /> : <Navigate to={'/'} />;
}

export default PublicRoutes;
